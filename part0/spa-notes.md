```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: write text and click "Save" button
    browser->>server: POST /new_note_spa with the text
    server->>browser: {"message":"note created"}
    browser->>user: refresh the list of notes without reloading