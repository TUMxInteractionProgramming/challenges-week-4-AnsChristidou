/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */

//#7 set current channel variable
var currentChannel = SevenContinents;

//#7 current location variable
var currentlocation = {
    longitude: 22.9357084,
    latitude: 40.643085,
    w3words: "congratulations.musical.grew"
}

function switchChannel(channelName) {

    //Log the channel switch
    console.log("Tuning in to channel", channelName);


    //#7 digest properties
    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = '#' + channelName.name;

    //#6 change the #channel #location
    //#7 digest location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/' + channelName.createdBy + '" target="_blank"><strong>upgrading.never.helps</strong></a>';



    // #6 #highlight the selected #channel.
    //  This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    // #7 modify with variables*/

    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');
    console.log(channelName.name)




    // #7 about stars, if boolean is true? then star or else no star*/
    $('#channels li').removeClass('fas far');
    $('#channels li').addClass(channelName.starred ? 'fas' : 'far')

    //#7 set log currentchannel
    currentChannel = channelName
    console.log('currentChannel', channelName)

}

function turnstar() {
    $('#channel-star').toggleClass('far fas');

    currentChannel.starred = !currentChannel.starred;

    $('#channels li:contains(' + currentChannel.name + ') .fa-star').removeClass('fas far');
    $('#channels li:contains(' + currentChannel.name + ') .fa-star').addClass(currentChannel.starred ? ' fas' : ' far');


}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

//#8 Constructor function for messages
function Message(text) {
    this.createdBy = currentlocation.w3words;
    this.latitude = currentlocation.latitude;
    this.longitude = currentlocation.longitude;
    this.createdOn = Date.now();
    this.expiresOn = new Date(Date.now() + (15 * 60 * 1000));
    this.text = text;
    this.own = true;
}

//#8 Create sendMessage function

   
    
    
//#8 Create messageElement
function createMessageElement(Message) {
    //calculate expires in
    var expiresIn = Math.round((message.expiresOn - Date.now()) / 60000)

    //message object to string
    //append to end of messages
     var sendmessage = new Message("Hello Chatter");
    console.log(sendmessage)
    createMessageElement(sendmessage)
    
    //call create message and append
    $('#message').append('<div class="message><h3><a href="http://w3w.co'+Message.createdBy + ':target="_blank>"' + '<strong><Message.createdBy</strong></a>' + Message.createdOn + expiresIn + </h3> + <p> 'Message.text' </p> + <buttton> +5 min. </div>')
}
