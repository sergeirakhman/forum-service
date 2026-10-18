export const err_404 = (path, message) => {
    return {
        "timestamp": new Date().toISOString(),
        "status": 404,
        "error": "Not Found",
        "message": message,
        "path": path
    }
}