
const schemaSport = {

    sportname:{
        type: String
    },

    ageclass:{
        type:String
    },

    agelevel: {
        type:String
    },

    duration: {
        type:String
    },

    description:{
        type:String
    },
    
    classes:[{

        time:{
            type:Number
        },

        users:[{
            type:String
        }],

        comments:[{

            type:String
        }]
    }]

}


module.exports = schemaSport;
export {};