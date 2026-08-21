import app from './app'
import { Config } from './config'
import logger from './config/logger'

const startServer = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => {
            logger.error('test error')
            logger.info('Server is running on port', { port: PORT })
        })
    } catch (error) {
        logger.error('Error starting server:', { error })
        process.exit(1)
    }
}

startServer()
