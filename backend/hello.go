package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    data := map[string]string{"message": "Hello from Go!"}
    jsonData, err := json.Marshal(data)
    if err != nil {
        fmt.Fprintf(w, "Error: %v", err)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    w.Write(jsonData)
}

func main() {
    http.HandleFunc("/", handler)
    fmt.Println("Server listening on port 8080") // Informational message
    http.ListenAndServe(":8080", nil)
}
