const messages = [
  {
    name: 'scottish-fold',
    time: '11:10 AM',
    icon: 'images/pickrusu.jpg',
    text: 'これはサンプルテキストですこれはサンプルテキストです\nこれはサンプルテキストです\nこれはサンプルテキストですこれはサンプルテキストですこれはサンプルテキストです',
  },
  {
    name: 'scottish-fold',
    time: '11:10 AM',
    icon: 'images/pickrusu.jpg',
    text: 'これはサンプルテキストですこれはサンプルテキストです\nこれはサンプルテキストです\nこれはサンプルテキストですこれはサンプルテキストですこれはサンプルテキストです',
  },
  {
    name: 'scottish-fold',
    time: '11:10 AM',
    icon: 'images/pickrusu.jpg',
    text: 'これはサンプルテキストですこれはサンプルテキストです\nこれはサンプルテキストです\nこれはサンプルテキストですこれはサンプルテキストですこれはサンプルテキストです',
  }
]

new Vue({
  el: "#app",
  data: {
    messages: messages,
    inputText: ""
  },
  methods: {
    send () {
      this.messages.push({
        name: 'scottish-fold',
        time: '11:10 AM',
        icon: 'images/pickrusu.jpg',
        text: this.inputText,
      })

      this.inputText = ""
    }
  }
})
