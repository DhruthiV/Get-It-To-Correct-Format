from flask import Flask, request, send_file
from flask_cors import CORS
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import io

app = Flask(__name__)
CORS(app)

@app.route('/generate-pdf', methods=['POST'])
def generate_pdf():
    # Receive data from React
    data = request.json

    # Create PDF in memory
    buffer = io.BytesIO()
    pdf = canvas.Canvas(buffer, pagesize=letter)
    width, height = letter

    # Header
    pdf.setFont("Helvetica-Bold", 16)
    pdf.drawString(100, height - 50, f"{data['courseCode']} {data['courseTitle']}")
    pdf.setFont("Helvetica", 12)
    pdf.drawString(100, height - 70, f"({data['credits']})")

    # Course Objectives
    y = height - 100
    pdf.drawString(100, y, "Course Objectives:")
    for obj in data['objectives']:
        y -= 20
        pdf.drawString(120, y, f"● {obj}")

    # Course Outcomes
    y -= 40
    pdf.drawString(100, y, "Course Outcomes:")
    for outcome in data['outcomes']:
        y -= 20
        pdf.drawString(120, y, f"● {outcome}")

    # Course Overview
    y -= 40
    pdf.drawString(100, y, "Course Overview:")
    for line in data['overview'].splitlines():
        y -= 20
        pdf.drawString(120, y, line)

    # Course Content
    y -= 40
    pdf.drawString(100, y, "Course Content:")
    for unit in data['syllabus']:
        y -= 20
        pdf.drawString(120, y, unit['title'])  # Unit Title
        y -= 20
        pdf.drawString(140, y, unit['description'])  # Unit Description
        y -= 20
        pdf.drawString(140, y, f"Experiential Learning: {unit['experiential_learning']}")  # Experiential Learning
        y -= 40  # Space between units

    # Textbooks
    y -= 20
    pdf.drawString(100, y, "Text Books:")
    for book in data['textbooks']:
        y -= 20
        pdf.drawString(120, y, book)

    # References
    y -= 40
    pdf.drawString(100, y, "Reference Books:")
    for ref in data['references']:
        y -= 20
        pdf.drawString(120, y, ref)

    # Save PDF
    pdf.showPage()
    pdf.save()
    buffer.seek(0)

    # Return the PDF file
    return send_file(buffer, as_attachment=True, download_name="course_syllabus.pdf", mimetype='application/pdf')

if __name__ == "__main__":
    app.run(debug=True)
