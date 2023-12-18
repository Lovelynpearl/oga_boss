import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { schemaValidator } from '../middlewares/schema.validation.middleware.js';
import { userUpdatePayload } from '../schemas/user.update.payload.js';
import { userPayload } from '../schemas/user.payload.js';
export const userRoutes = Router();
userRoutes.get('/', userController.userDash);
userRoutes.get('/all', userController.getAllUsers);
userRoutes.get('/:userId', userController.getUser);
userRoutes.post('/signup', [schemaValidator.verify(userPayload)], userController.addUser);
userRoutes.patch('/update/:userId', [schemaValidator.verify(userUpdatePayload)], userController.updateUser);
userRoutes.delete('/:userId', userController.deleteUser);
//# sourceMappingURL=user.routes.js.map