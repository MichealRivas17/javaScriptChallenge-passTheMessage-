(function() {
    //set the input element
    const form = document.querySelector('#message-form')
    //set up submit button
    form.addEventListener('submit', function(event) {
        // prevent the form's default submission action
        event.preventDefault()
        //Get user's input from from
        const message = document.querySelector('#message')
        const feedback =  document.querySelector('.feedback')
        const messageContent = document.querySelector('.message-content')

        if (message.value === '') {
            feedback.classList.add('show')
            setTimeout(function(){feedback.classList.remove('show')}, 2000)
        } else {
            //Change message content and clear the message input
            messageContent.textContent = message.value
            message.value = ''
        }

    })

})();