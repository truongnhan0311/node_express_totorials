import {body} from 'express-validator'

export const createAuthorValidationRule = () => {
    return [
        // firstName cant empty
        body('firstName').notEmpty(),

        // lastName cant empty
        body('lastName').notEmpty()
    ]
}