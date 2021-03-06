'use strict';

module.exports = ({ TC_API }) => {
  return {
    // getCreatureByID  
    getCreatureByID(req, res) {

      const creature_id = req.params.creature_id;

      if (!creature_id) {
        return res.status(400).json({ message: 'Searching for a creature by id requires creature id' });
      }

      TC_API
        .search_creature(creature_id)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
    },
    // getCreatureTextByID
    getCreatureTextByID(req, res) {
      const creature_id = req.params.creature_id;

      if (!creature_id) {
        return res.status(400).json({ message: 'Searching for a creature text by id requires creature id' });
      }

      TC_API
        .search_creature_text(creature_id)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
    },
    CreatureTextUpdate(req, res) {
      res.send(JSON.parse(req.body));

      TC_API.run_text(JSON.parse(req.body), function () {

        return res.send(JSON.parse(req.body));
      });
    },
    // CreatureTemplateUpdate
    CreatureTemplateUpdate(req, res) {

      let creature_data = JSON.parse(req.body);

      let where = 'entry = ' + creature_data.currentRows.entry;

      TC_API.UpdateQuery('creature_template', where, creature_data.currentRows, creature_data.newRows, (result) => {

        return res.send(result);

      });
    },
    // GetCreatureEntities
    get_object_entitiesbyEntry(req, res) {

      const creature_id = req.params.creature_id;
      const table = req.params.table;
      
      // Use Promise
      TC_API.get_object_entitiesbyEntry(creature_id, table).then(result => {res.send(result);}).catch(err => {console.log(err); res.send('SQL Error!')});
    },
  };
};