from flask import Flask, request, send_file
from flask_cors import CORS
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
import io

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

@app.route('/generate-pdf', methods=['POST'])
def generate_pdf():
    # Receive data from React
    data = request.json

    # Create PDF in memory
    buffer = io.BytesIO()
    pdf = SimpleDocTemplate(buffer, pagesize=letter)
    elements = []

    # Styles
    styles = getSampleStyleSheet()
    title_style = ParagraphStyle(name='Title', fontName='Times-Roman', fontSize=16, alignment=1, spaceAfter=10, leading=20)
    heading_style = ParagraphStyle(name='Heading2', fontName='Times-Roman', fontSize=14, alignment=0, spaceAfter=14, leading=20, textColor=colors.black, fontWeight='bold')
    sub_heading_style = ParagraphStyle(name='Heading3', fontName='Times-Roman', fontSize=12, spaceAfter=12, leading=18, fontWeight='bold')
    normal_style = ParagraphStyle(name='BodyText', fontName='Times-Roman', fontSize=12, leading=20)
    bullet_style = ParagraphStyle(name='Bullet', fontName='Times-Roman', fontSize=12, leftIndent=20, leading=20)

    # Course Title and Credits in Center
    elements.append(Paragraph(f"<b>{data['courseCode']} {data['courseTitle']}</b>", title_style))
    elements.append(Spacer(1, 6))
    elements.append(Paragraph(f"(<b>{data['credits']}</b>)", ParagraphStyle(name='Credits', fontName='Times-Roman', fontSize=16, alignment=1, leading=20)))
    elements.append(Spacer(1, 12))

    # Course Objectives
    elements.append(Paragraph("<b>Course Objectives:</b>", heading_style))
    elements.append(Paragraph("The objective of the course is to:", normal_style))
    for obj in data['objectives'].split('\n'):
        elements.append(Paragraph(f"{obj}", bullet_style, bulletText='\u2022'))
    elements.append(Spacer(1, 12))

    # Course Outcomes
    elements.append(Paragraph("<b>Course Outcomes:</b>", heading_style))
    elements.append(Paragraph("After this course, the student will be able to:", normal_style))
    for outcome in data['outcomes'].split('\n'):
        elements.append(Paragraph(f"{outcome}", bullet_style, bulletText='\u2022'))
    elements.append(Spacer(1, 12))

    # Course Overview in one paragraph
    elements.append(Paragraph("<b>Course Overview:</b>", heading_style))
    elements.append(Paragraph(data['overview'].replace('\n', ' '), normal_style))
    elements.append(Spacer(1, 12))

    # Course Content (Syllabus)
    elements.append(Paragraph("<b>Course Content:</b>", heading_style))
    for unit in data['syllabus']:
        elements.append(Spacer(1, 12))
        elements.append(Paragraph(f"<b>{unit['title']}</b>", sub_heading_style))  # Unit Title
        elements.append(Paragraph(str(unit['description']).replace('\n', ' '), normal_style))  # Description
        if 'experientialLearning' in unit and unit['experientialLearning']:
            elements.append(Spacer(1, 6))
            elements.append(Paragraph(f"Experiential learning: {unit['experientialLearning']}", normal_style))
        if 'hours' in unit and unit['hours']:
            elements.append(Paragraph(f"<b>{unit['hours']}</b>", ParagraphStyle(name='RightAlign', fontName='Times-Roman', fontSize=11, alignment=2)))  # Hours on right
    elements.append(Spacer(1, 12))

    # Textbooks
    elements.append(Paragraph("<b>Text Books:</b>", heading_style))
    for i, book in enumerate(data['textbooks'].split('\n'), start=1):
        elements.append(Paragraph(f"{i}. {book}", normal_style))
    elements.append(Spacer(1, 12))

    # References
    elements.append(Paragraph("<b>Reference Books:</b>", heading_style))
    for i, ref in enumerate(data['references'].split('\n'), start=1):
        elements.append(Paragraph(f"{i}. {ref}", normal_style))
    elements.append(Spacer(1, 12))

    try:
        pdf.build(elements)
    except Exception as e:
        print(f"Error generating PDF: {e}")
        return {"error": "Error generating PDF"}, 500

    # Send PDF file as response
    buffer.seek(0)
    filename = f"{data['courseCode'].upper()}.pdf"
    return send_file(buffer, as_attachment=True, download_name=filename, mimetype='application/pdf')

if __name__ == "__main__":
    app.run(debug=True)