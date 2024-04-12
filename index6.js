class NotificationSender {
    constructor(status) {
        this.status = status; 
    }
}

class PromotionSender {
    constructor(){

    }

    sendNotification(notification) {
        console.log('Sending: ' +notification);

    }

    findUsersWithStatus(status) {
        let users = getUsers(status); 
        return users; 
    }

    calculateDiscount(status) {
        if (status ==='GOLD') {
            return .3;
        } else if (status === 'SILVER'){
            return .15; 
        }
        return 0;
        }
    }
    class CollectionsSender {
        constructor() {


        }
        sendNotification(notification) {
            console.log('Sending: ' +notification);
    
        }
        findUsersWithStatus(status) {
            let users = getUsers(status); 
            return users; 
        }
calculateFee(status) {
    if (status === 'OVERDUE'){
        return 10;
    } else if (status === 'DELIQUENT'){
        return 25;
    }
    return 5; 
}
    }
