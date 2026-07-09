ESOLTECH GitHub Pages Static Website
====================================

This package is 100% GitHub Pages compatible.
It uses only HTML, CSS, JavaScript, images, and vendor assets.

Included pages:
- index.html
- about.html
- services.html
- contact.html
- privacy-policy.html
- terms-and-conditions.html
- service detail pages

Forms:
- Contact form sends to: hafeez_03@hotmail.com
- Newsletter form sends subscriptions to: hafeez_03@hotmail.com
- Both use FormSubmit AJAX endpoint because GitHub Pages cannot run PHP, SMTP, or write CSV files.

Important first-time FormSubmit activation:
1. Upload the website to GitHub Pages.
2. Open the website.
3. Submit the contact form once.
4. FormSubmit will send an activation email to hafeez_03@hotmail.com.
5. Open that email and confirm activation.
6. After confirmation, forms will work normally.

GitHub Pages deployment:
1. Create a GitHub repository.
2. Upload all files/folders from this package to the repository root.
3. Go to repository Settings > Pages.
4. Select branch: main, folder: /root.
5. Save.
6. Open the GitHub Pages URL after deployment completes.

Limitations of GitHub Pages:
- No PHP
- No PHPMailer
- No SMTP direct sending
- No server-side CSV/database storage
- FormSubmit is used as the backend service for form delivery.

Footer changes completed:
- Original footer design kept.
- Added Company: Home, About, Services.
- Added Legal: Privacy Policy, Terms of Service.
- Removed separate Address column.
- Contact changed to Karachi, Pakistan, +923238556568, hafeez_03@hotmail.com.
- Follow Us section kept.
