```mermaid
sequenceDiagram
    participant server
    participant browser
    participant user

    user->>browser: go to /spa
    browser->>server: GET /spa
    server-->>browser: HTML document
    browser->>server: GET /main.css
    server-->>browser: CSS file
    browser->>server: GET /main.js
    server-->>browser: the javascript file, render the SPA page
    browser->>server: GET /data.json
    server-->>browser: JSON with notes