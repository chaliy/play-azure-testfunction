module.exports = (context, req) => {
    context.log(`Node.js HTTP trigger function processed a request. ${req.originalUrl}`);
    
    var name = req.query.name || "foo";
    
    context.res = {            
        body: `Hello #2, ${name}`
    };
    context.done();
};