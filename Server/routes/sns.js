import { Router } from 'express';

const router = Router();
// define the home page route
router.get('/config', (req, res) => {
    res.send('SNS config sucessfully');
  })
// define the about route
router.get('/', (req, res) => {
    res.send('Get message');
})

export default router;