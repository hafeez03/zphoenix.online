IMPORTANT: Contact and subscribe forms use PHP.

Your screenshot shows IIS is treating subscribe.php as a StaticFile. That means PHP is not configured in IIS, so POST requests to .php return HTTP 405.

To make the forms work on IIS:
1. Install PHP for Windows on the server.
2. In IIS Manager, add a Handler Mapping for *.php to php-cgi.exe using FastCGI.
3. Enable SMTP / configure PHP mail() in php.ini, or replace mail() with SMTP code.
4. Give the website folder write permission if you want subscribers.csv to be created.
5. Test with: http://your-site/contact.html and submit the form. Do not open subscribe.php directly.

Files changed:
- Subscribe section moved to index.html before footer.
- Subscribe section removed from contact.html.
- subscribe.php redirects GET requests back to index.html#subscribe.
- contact.php redirects GET requests back to contact.html.
