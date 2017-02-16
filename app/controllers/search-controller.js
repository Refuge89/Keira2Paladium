'use strict';

module.exports = ({ TC_API }) => {
    return {
        getCreaturebyID(req, res) {
            
               TC_API.search_creature(req.params,function(result){
     
               return res.send(result);

              }); 
        },
        
        getCreaturebyName(req, res) {
            
                   TC_API.search_creature_name(req.params,function(result){
     
                   return res.send(result);
        

              }); 
        }
        
        
        
    }
}