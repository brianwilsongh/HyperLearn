state {

  current_user: {

    id: 1234,

    username: “name42”

    avatar_url: “/assets/images/03421.png”

  },


  current_user_subjects: {

    1234: {

      id: 1234,

      owner_id: 1234,

      name: “Conjuration”,

      decks: {
        1: {
          id: 1,
          name: conjuring zombie
          cards: [1,2,3,4]
          mastery: 53
        },
        2: {
          id: 2,
          name: conjuring imp
          cards: [5,6,7]
          mastery: 23
        }
      }

    },

    2345: {

    id: 2345,

    owner_id: 1234,

    name: “Destruction”,

    decks: {
      3: {
        id: 3
        name: fire
        cards: [8,9]
        mastery: 7
      }
    }

    }

  },


  current_subject: {

    id: 3456,

    owner_id: 1234,

    name: “Restoration”

    decks: [6,7,8,9],

    pic_url: “/assets/images/03421.png”

    users_following: {
      2043: {
        id: 2043,
        username: "targaryen400",
        password_digest: "23874223j",
        session_token: nil
      },
      121: {
        id: 121,
        username: "lannister4life",
        password_digest: "du30jc",
        session-token: nil
      }
    }

    },

  }

  current_deck: {

  id: 101,

  name: mysticism

  mastery: 62

  cards: {
      52: {
        id: 52,
        question: "Spell to detect enemies through walls/darkness",
        answer: "detect life"
        
      }
    }

  },

  current_card: {

  id: 52,

  question: “answer to life” ,

  answer: "42",

  pic_url: “/assets/images/412.png”,

  mastery: 5

},
