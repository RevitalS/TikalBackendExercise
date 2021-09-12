const constants = require('./Constants');

let messagesRecipientMap = new Map();

function addMessageToMap(messageBlock) {
    if (messagesRecipientMap.get(messageBlock.recipient) !== undefined) {
        let newMessageList = messagesRecipientMap.get(messageBlock.recipient);
        newMessageList.push(messageBlock.message);
        messagesRecipientMap.set(messageBlock.recipient, newMessageList);
    }
    else {
        messagesRecipientMap.set(messageBlock.recipient, [messageBlock.message]);
    }
}

function getMeggaseList(recipient) {
    if (messagesRecipientMap.has(recipient)){
        return messagesRecipientMap.get(recipient);
    } else {
        return 'The recipient does not exist';
    }

}

function isValidData(data, dataType) {
    if (data === null || data === undefined) {
        return false;
    }
    if(dataType === constants.SEND) {
       if(!Object.keys(data).find(key => key === constants.SENDER) || 
       !Object.keys(data).find(key => key === constants.RECIPIENT) ||
       !Object.keys(data).find(key => key === constants.MESSAGE))
        {
           return false;
       }
       if (data[constants.SENDER] === "" || data[constants.RECIPIENT] === "" ||
        data[constants.MESSAGE] === "") {
           return false;
       }
    } else {
        if (!Object.keys(data).find(key => key === constants.RECIPIENT)) {
            return false;
        }
        if (data[constants.RECIPIENT] === "") {
            return false;
        }
    }
    return true;
}

module.exports = {
    addMessageToMap,
    getMeggaseList,
    isValidData
}