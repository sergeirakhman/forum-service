const errHandler = (err, req, res, next) => {
    console.log(err.stack);

    if (err.message?.toLowerCase().includes('not found'))
        return res.status(404).json({
            "timestamp": new Date().toISOString(),
            "status": 404,
            "error": 'Not found',
            "message": err.message,
            "path": req.path
        })

    if (err.message?.toLowerCase().includes('already exists'))
        return res.status(409).json({
            "timestamp": new Date().toISOString(),
            "status": 409,
            "error": 'Conflict',
            "message": err.message,
            "path": req.path
        })

    return res.status(500).json({
        "timestamp": new Date().toISOString(),
        "status": 500,
        "error": 'Internal server error',
        "message": err.message,
        "path": req.path
    })
}

export default errHandler;