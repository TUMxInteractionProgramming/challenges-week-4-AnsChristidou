//Channel Variables
var Yummy = {
    name: 'Yummy',
    createdOn: new Date(2016, 2, 1),   
    createdBy: 'minus.plus.yummy',
    starred: false,
    expiresIn: 100,
    messageCount: 999
};
var SevenContinents = {
    name: 'SevenContinents',
    createdOn: new Date(2016, 2, 1),   
    createdBy: 'minus.plus.yummy',
    starred: true,
    expiresIn: 100,
    messageCount: 999
};
var KillerApp = {
    name: 'KillerApp',
    createdOn: new Date(2016, 2, 1),   
    createdBy: 'minus.plus.yummy',
    starred: false,
    expiresIn: 100,
    messageCount: 999
};
var FirstPersonOnMars = {
    name: 'FirstPersonOnMars',
    createdOn: new Date(2016, 2, 1),   
    createdBy: 'minus.plus.yummy',
    starred: true,
    expiresIn: 100,
    messageCount: 999
};
var Octoberfest = {
    name: 'Octoberfest',
    createdOn: new Date(2016, 2, 1),   
    createdBy: 'minus.plus.yummy',
    starred: false,
    expiresIn: 100,
    messageCount: 999
};
    
//#8 Create list function
function listChannels(){
   $("<li>").appendTo("#channel-ul")
}

function createChannelElement(channelName){
    
}