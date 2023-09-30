const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll(
      // include: [{Product, through: ProductTag, as: 'Product_Tag'}]
    );
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await new Tag.findByPk(req.params.id, {
      include: [{Product, through: ProductTag, as: 'Product_Tag'}]
    })
    if(!tagData){
      res.status(404).json({ message: 'No tag found with that ID'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagUpdated = await Tag.update(req.body,{
      where: {
        id: req.params.id
      },
    })
    if(!tagUpdated){
      return res.status(404).json({message: 'Tag not found'});
    }
    const updatedTagData = await Tag.findByPk(req.params.id);
    return res.json(updatedTagData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
    return;
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!tagData){
      res.status(404).json({ message: 'No tag with that ID found.'})
      return;
    }
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
