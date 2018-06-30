class StopWatch {
    constructor() {
        let startTime,
            endTime,
            running,
            duration = 0
    }

    start() {
        if (running)
            throw new Error('StopWatch has already started')
        running = true
        startTime = new Date()
    }

    stop() {
        if (!running)
            throw new Error('StopWatch has already started')
        running = false
        endTime = new Date()
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }

    reset() {
        starTime = null
        endTime = null
        running = false
        duration = 0
    }

    Object.defineProperty(this, 'duration', () => {
        get: () => {
            return duration
        }
    })
}

const sw = new StopWatch()
