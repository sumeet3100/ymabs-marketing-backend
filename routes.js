const express = require('express'); 
const router = express.Router();

const homeRoutes = require("./home/routes/homeRoutes");
router.get('/', function(){ }).use('/', homeRoutes);

router.get('/test', (req, res) => {
    res.send('Route works!!!')
});

module.exports = router;