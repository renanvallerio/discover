const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.on('saySomething', (message) => {
  console.log('I heard you', message)
})

ev.once('saySomethingOnlyOnce', (message) => {
  console.log('Stop', message)
})

ev.emit('saySomething', 'Renan')
ev.emit('saySomething', 'Renan')
ev.emit('saySomething', 'Renan')

ev.emit('saySomethingOnlyOnce', 'Renan')
ev.emit('saySomethingOnlyOnce', 'Renan')
ev.emit('saySomethingOnlyOnce', 'Renan')

