from flask import Flask, request, send_file
from flask_cors import CORS
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet
import io

app = Flask(__name__)
CORS(app)

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
    title_style = styles['Title']
    heading_style = styles['Heading2']
    normal_style = styles['BodyText']

    # Course Title and Credits
    elements.append(Paragraph(f"{data['courseCode']} {data['courseTitle']}", title_style))
    elements.append(Paragraph(f"Credits: {data['credits']}", normal_style))
    elements.append(Spacer(1, 12))

    # Course Objectives
    elements.append(Paragraph("Course Objectives:", heading_style))
    for obj in data['objectives'].split('\n'):
        elements.append(Paragraph(f"● {obj}", normal_style))
    elements.append(Spacer(1, 12))

    # Course Outcomes
    elements.append(Paragraph("Course Outcomes:", heading_style))
    for outcome in data['outcomes'].split('\n'):
        elements.append(Paragraph(f"● {outcome}", normal_style))
    elements.append(Spacer(1, 12))

    # Course Overview
    elements.append(Paragraph("Course Overview:", heading_style))
    for line in data['overview'].split('\n'):
        elements.append(Paragraph(line, normal_style))
    elements.append(Spacer(1, 12))

    # Course Content (Syllabus)
    elements.append(Paragraph("Course Content:", heading_style))
    for unit in data['syllabus']:
        elements.append(Spacer(1, 12))
        elements.append(Paragraph(unit['title'], heading_style))  # Unit Title
        elements.append(Paragraph(unit['description'], normal_style))  # Description
        elements.append(Paragraph(f"Experiential Learning: {unit['experiential_learning']}", normal_style))
    elements.append(Spacer(1, 12))

    # Textbooks
    elements.append(Paragraph("Text Books:", heading_style))
    for i, book in enumerate(data['textbooks'].split('\n'), start = 1):
        elements.append(Paragraph(f"{i} {book}", normal_style))
    elements.append(Spacer(1, 12))

    # References
    elements.append(Paragraph("Reference Books:", heading_style))
    for i, ref in enumerate(data['references'].split('\n'), start = 1):
        elements.append(Paragraph(f"{i} {ref}", normal_style))
    elements.append(Spacer(1, 12))

    # Build PDF
    pdf.build(elements)

    # Send PDF file as response
    buffer.seek(0)
    filename = f"{data['courseCode'].upper()}.pdf"
    return send_file(buffer, as_attachment=True, download_name=filename, mimetype='application/pdf')


if __name__ == "__main__":
    app.run(debug=True)
