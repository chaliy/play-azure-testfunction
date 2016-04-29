module.exports = function(context, req) {
    context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);
    
    var name = req.query.name || "foo";
    
    context.res = {            
        body: `Hello #2, ${name}`
    };
    context.done();
};