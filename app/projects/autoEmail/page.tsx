// pages/index.js

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Welcome to&nbsp;
                    <code className="font-mono font-bold">Auto Email</code>
                </p>
                <div
                    className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                    <h1 className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        rel="noopener noreferrer">
                        Go{' '}
                        <a href="/projects">Back</a>
                    </h1>
                </div>
            </div>

            <div style={{ height: '60vh' }}
                 className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <h1 className="Title text-3xl lg:text-4xl">Auto Email</h1>
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
                <div
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className="mb-3 text-2xl font-semibold">
                        The Code:
                    </h2>
                    <div className="m-0 text-sm opacity-75">
                        <pre className="block bg-gray-800 text-white text-left p-2 rounded mb-4">{`
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import os

# Email configuration
smtp_server = 'smtp.gmail.com'
smtp_port = 587
email_address = 'your_email@gmail.com'  # Replace with your email address
email_password = 'your_password'  # Replace with your email password

# Path to the attachment
attachment_path = 'Attachment name'

# List of placeholder web development companies
companies = [
    {
        'name': 'Placeholder Company 1',
        'email': 'info@placeholder1.com',
        'address': 'Address 1, Ghent, Belgium'
    },
    {
        'name': 'Placeholder Company 2',
        'email': 'info@placeholder2.com',
        'address': 'Address 2, Ghent, Belgium'
    },
    {
        'name': 'Placeholder Company 3',
        'email': 'info@placeholder3.com',
        'address': 'Address 3, Ghent, Belgium'
    }
]

# Function to create email message
def create_email(company):
    subject = f'Sollicitatie voor een studentenjob bij {company["name"]}'
    body = f"""\\
#Your email
    """

    msg = MIMEMultipart()
    msg['From'] = email_address
    msg['To'] = company['email']
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    # Attach the file
    attach_file(msg, attachment_path)

    return msg

# Function to attach a file to the email
def attach_file(msg, filename):
    with open(filename, 'rb') as attachment:
        part = MIMEBase('application', 'octet-stream')
        part.set_payload(attachment.read())
        encoders.encode_base64(part)
        part.add_header(
            'Content-Disposition',
            f'attachment; filename= {os.path.basename(filename)}',
        )
        msg.attach(part)

# Send email function
def send_email(msg):
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(email_address, email_password)
        server.send_message(msg)

# Send emails to all placeholder companies
for company in companies:
    msg = create_email(company)
    send_email(msg)

print("Emails sent successfully.")

                        `}
                        </pre>
                        This is a project to send automatic emails to multiple adresses. You have to give a json with contents name, email. You also need a gmail login to use this.

                    </div>
                </div>
            </div>
        </main>
    );
}
