
const tasksLists = [
    {
        "title":"Alışveriş Listesi",
        "tasks":[
            {
                "isDone":true,
                "content":"Peynir al"
            },
            {
                "isDone":false,
                "content":"Domates al"
            },
            {
                "isDone":false,
                "content":"Yumurta al"
            }
        ]
    },
    {
        "title":"Çalışma Planı",
        "tasks":[
            {
                "isDone":true,
                "content":"JavaScript kursunu izle"
            },
            {
                "isDone":false,
                "content":"HTML5 deneme projesini bitir"
            }
        ]
    }
]

export default tasksLists;




//mockapi verileri


export const tasks = [
    {
      "id": "1",
      "title": "Alışveriş Listesi",
      "list": [
        "1",
        "2",
        "3"
      ],
      "category": "Shop"
    },
    {
      "id": "2",
      "title": "Çalışma Planı",
      "list": [
        "4",
        "5"
      ],
      "category": "Study"
    }
  ]


export const lists = [
  {
    "id": "1",
    "taskId": "1",
    "isDone": true,
    "content": "Peynir al"
  },
  {
    "id": "2",
    "taskId": "1",
    "isDone": false,
    "content": "Domates al"
  },
  {
    "id": "3",
    "taskId": "1",
    "isDone": false,
    "content": "Yumurta al"
  },
  {
    "id": "4",
    "taskId": "2",
    "isDone": true,
    "content": "JavaScript kursunu izle"
  },
  {
    "id": "5",
    "taskId": "2",
    "isDone": false,
    "content": "HTML5 deneme projesini bitir"
  }
]


export const newTasks = [
  {
    "id": "1",
    "title": "Alışveriş Listesi",
    "category": "Shopping",
    "list": [
      {
        "isDone": true,
        "content": "Peynir al"
      },
      {
        "isDone": false,
        "content": "Domates al"
      },
      {
        "isDone": false,
        "content": "Yumurta al"
      }
    ]
  },
  {
    "id": "2",
    "title": "Çalışma Planı",
    "category": "Study",
    "list": [
      {
        "isDone": true,
        "content": "JavaScript kursunu izle"
      },
      {
        "isDone": false,
        "content": "HTML5 deneme projesini bitir"
      }
    ]
  }
]