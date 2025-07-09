```mermaid
sequenceDiagram
    participant server
    participant browser
    participant user

    user->>browser: write text and click "Save" button
    browser->>server: POST /new_note_spa with the text
    server->>browser: {"message":"note created"}
    browser->>user: refresh the list of notes without reloading