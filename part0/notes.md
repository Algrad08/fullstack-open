```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: write text and click "Save" button
    browser->>server: POST /new_note with the text
    server->>browser: redirect to /notes
    browser->>server: GET /notes
    server->>browser: HTML document
    browser->>server: GET /main.css
    server->>browser: the CSS file
    browser->>server: GET /main.js
    server->>browser: the javascript file
    browser->>server: GET /data.json
    server-> browser: the .json file