const quotes = [
    {
        "quote": "Imagination is more important than knowledge.",
        "attribution": "Albert Einstein"
    },
    {
        "quote": "If I have seen further it is by standing on the shoulders of Giants.",
        "attribution": "Isaac Newton"
    },
    {
        "quote": "The present is theirs; the future, for which I really worked, is mine.",
        "attribution": "Nikola Tesla"
    },
    {
        "quote": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
        "attribution": "Marie Curie"
    },
    {
        "quote": "Simplicity is the ultimate sophistication.",
        "attribution": "Leonardo da Vinci"
    },
    {
        "quote": "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
        "attribution": "Alan Turing"
    },
    {
        "quote": "Stay hungry, stay foolish.",
        "attribution": "Steve Jobs"
    },
    {
        "quote": "That brain of mine is something more than merely mortal; as time will show.",
        "attribution": "Ada Lovelace"
    },
    {
        "quote": "However difficult life may seem, there is always something you can do and succeed at.",
        "attribution": "Stephen Hawking"
    },
    {
        "quote": "When something is important enough, you do it even if the odds are not in your favor.",
        "attribution": "Elon Musk"
    },
    {
        "quote": "Innovation distinguishes between a leader and a follower.",
        "attribution": "Steve Jobs"
    },
    {
        "quote": "The best way to predict the future is to invent it.",
        "attribution": "Alan Kay"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "attribution": "Steve Jobs"
    },
    {
        "quote": "Science is a way of thinking much more than it is a body of knowledge.",
        "attribution": "Carl Sagan"
    },
    {
        "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "attribution": "Thomas Edison"
    },
    {
        "quote": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
        "attribution": "Stephen Hawking"
    },
    {
        "quote": "Mathematics is the language with which God has written the universe.",
        "attribution": "Galileo Galilei"
    },
    {
        "quote": "The measure of intelligence is the ability to change.",
        "attribution": "Albert Einstein"
    },
    {
        "quote": "The true sign of intelligence is not knowledge but imagination.",
        "attribution": "Albert Einstein"
    },
    {
        "quote": "You cannot teach a man anything; you can only help him find it within himself.",
        "attribution": "Galileo Galilei"
    },
    {
        "quote": "I think, therefore I am.",
        "attribution": "Ren\u00c3\u00a9 Descartes"
    },
    {
        "quote": "The unexamined life is not worth living.",
        "attribution": "Socrates"
    },
    {
        "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "attribution": "Ralph Waldo Emerson"
    },
    {
        "quote": "The only thing we have to fear is fear itself.",
        "attribution": "Franklin D. Roosevelt"
    },
    {
        "quote": "The only true wisdom is in knowing you know nothing.",
        "attribution": "Socrates"
    },
    {
        "quote": "I have not failed. I've just found 10,000 ways that won't work.",
        "attribution": "Thomas Edison"
    },
    {
        "quote": "All our dreams can come true, if we have the courage to pursue them.",
        "attribution": "Walt Disney"
    },
    {
        "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "attribution": "Aristotle"
    },
    {
        "quote": "In the midst of chaos, there is also opportunity.",
        "attribution": "Sun Tzu"
    },
    {
        "quote": "The journey of a thousand miles begins with one step.",
        "attribution": "Lao Tzu"
    },
    {
        "quote": "Fear is only as deep as the mind allows.",
        "attribution": "Japanese Proverb"
    },
    {
        "quote": "Courage is resistance to fear, mastery of fear, not absence of fear.",
        "attribution": "Mark Twain"
    },
    {
        "quote": "Fear has its use but cowardice has none.",
        "attribution": "Mahatma Gandhi"
    },
    {
        "quote": "Do one thing every day that scares you.",
        "attribution": "Eleanor Roosevelt"
    },
    {
        "quote": "Fear is the mind-killer.",
        "attribution": "Frank Herbert"
    },
    {
        "quote": "The greatest barrier to success is the fear of failure.",
        "attribution": "Sven Goran Eriksson"
    },
    {
        "quote": "The brave man is not he who does not feel afraid, but he who conquers that fear.",
        "attribution": "Nelson Mandela"
    },
    {
        "quote": "Fear is only as deep as the mind allows.",
        "attribution": "Japanese Proverb"
    },
    {
        "quote": "Fear is a reaction. Courage is a decision.",
        "attribution": "Winston Churchill"
    },
    {
        "quote": "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
        "attribution": "Eleanor Roosevelt"
    },
    {
        "quote": "Silence is a source of great strength.",
        "attribution": "Lao Tzu"
    },
    {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "attribution": "Martin Luther King Jr."
    },
    {
        "quote": "The quieter you become, the more you can hear.",
        "attribution": "Ram Dass"
    },
    {
        "quote": "Silence is the sleep that nourishes wisdom.",
        "attribution": "Francis Bacon"
    },
    {
        "quote": "True silence is the rest of the mind, and is to the spirit what sleep is to the body, nourishment and refreshment.",
        "attribution": "William Penn"
    },
    {
        "quote": "Silence is the language of God, all else is poor translation.",
        "attribution": "Rumi"
    },
    {
        "quote": "The tree of silence bears the fruit of peace.",
        "attribution": "Arabian Proverb"
    },
    {
        "quote": "Silence is the most powerful scream.",
        "attribution": "Anonymous"
    },
    {
        "quote": "Silence is the sanctuary of the prudent.",
        "attribution": "Baltasar Graci\u00c3\u00a1n"
    },
    {
        "quote": "Silence is the mother of truth.",
        "attribution": "Benjamin Disraeli"
    },
    {
        "quote": "Courage is not the absence of fear, but the triumph over it.",
        "attribution": "Nelson Mandela"
    },
    {
        "quote": "Courage is grace under pressure.",
        "attribution": "Ernest Hemingway"
    },
    {
        "quote": "It takes courage to grow up and become who you really are.",
        "attribution": "E.E. Cummings"
    },
    {
        "quote": "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
        "attribution": "Winston Churchill"
    },
    {
        "quote": "Courage is resistance to fear, mastery of fear, not absence of fear.",
        "attribution": "Mark Twain"
    },
    {
        "quote": "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.",
        "attribution": "Steve Jobs"
    },
    {
        "quote": "The brave man is not he who does not feel afraid, but he who conquers that fear.",
        "attribution": "Nelson Mandela"
    },
    {
        "quote": "Courage is not simply one of the virtues, but the form of every virtue at the testing point.",
        "attribution": "C.S. Lewis"
    },
    {
        "quote": "Courage is being scared to death, but saddling up anyway.",
        "attribution": "John Wayne"
    },
    {
        "quote": "Life shrinks or expands in proportion to one's courage.",
        "attribution": "Anais Nin"
    },
    {
        "quote": "The purpose of our lives is to be happy.",
        "attribution": "Dalai Lama"
    },
    {
        "quote": "Happiness depends upon ourselves.",
        "attribution": "Aristotle"
    },
    {
        "quote": "Happiness is not something ready-made. It comes from your own actions.",
        "attribution": "Dalai Lama"
    },
    {
        "quote": "The happiest people don't have the best of everything, they make the best of everything.",
        "attribution": "Anonymous"
    },
    {
        "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
        "attribution": "Mahatma Gandhi"
    },
    {
        "quote": "The most important thing is to enjoy your life\u00e2\u20ac\u201dto be happy\u00e2\u20ac\u201dit's all that matters.",
        "attribution": "Audrey Hepburn"
    },
    {
        "quote": "Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy.",
        "attribution": "Ralph Marston"
    },
    {
        "quote": "The secret of happiness is not in doing what one likes, but in liking what one does.",
        "attribution": "James M. Barrie"
    },
    {
        "quote": "Happiness is not a goal; it's a by-product of a life well-lived.",
        "attribution": "Eleanor Roosevelt"
    },
    {
        "quote": "The key to being happy is knowing you have the power to choose what to accept and what to let go.",
        "attribution": "Dodinsky"
    },
    {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "attribution": "Winston Churchill"
    },
    {
        "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "attribution": "Albert Schweitzer"
    },
    {
        "quote": "Success is not in what you have, but who you are.",
        "attribution": "Bo Bennett"
    },
    {
        "quote": "Success is not about how much money you make; it's about the difference you make in people's lives.",
        "attribution": "Michelle Obama"
    },
    {
        "quote": "Success is not the destination, but the road that you're on. Being successful means that you're working hard and walking your walk every day.",
        "attribution": "Marlon Wayans"
    },
    {
        "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
        "attribution": "Winston Churchill"
    },
    {
        "quote": "Success is liking yourself, liking what you do, and liking how you do it.",
        "attribution": "Maya Angelou"
    },
    {
        "quote": "Success is the sum of small efforts, repeated day in and day out.",
        "attribution": "Robert Collier"
    },
    {
        "quote": "Success is not just about making money. It's about making a difference.",
        "attribution": "Unknown"
    },
    {
        "quote": "The only true wisdom is in knowing you know nothing.",
        "attribution": "Socrates"
    },
    {
        "quote": "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
        "attribution": "Albert Einstein"
    },
    {
        "quote": "The art of being wise is the art of knowing what to overlook.",
        "attribution": "William James"
    },
    {
        "quote": "The wise man does at once what the fool does finally.",
        "attribution": "Baltasar Graci\u00c3\u00a1n"
    },
    {
        "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
        "attribution": "Aristotle"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "attribution": "Steve Jobs"
    },
    {
        "quote": "Wisdom comes from experience. Experience is often a result of lack of wisdom.",
        "attribution": "Terry Pratchett"
    },
    {
        "quote": "The only fool bigger than the person who knows it all is the person who argues with him.",
        "attribution": "Stanislaw Jerzy Lec"
    },
    {
        "quote": "The wise man questions the wisdom of others because he questions his own, the foolish man, because it is different from his own.",
        "attribution": "Leo Stein"
    },
    {
        "quote": "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
        "attribution": "Bruce Lee"
    },
    {
        "quote": "Believe you can and you're halfway there.",
        "attribution": "Theodore Roosevelt"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "attribution": "Steve Jobs"
    },
    {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "attribution": "Winston Churchill"
    },
    {
        "quote": "The best way to predict the future is to invent it.",
        "attribution": "Alan Kay"
    },
    {
        "quote": "You are never too old to set another goal or to dream a new dream.",
        "attribution": "C.S. Lewis"
    },
    {
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
        "attribution": "Eleanor Roosevelt"
    },
    {
        "quote": "It does not matter how slowly you go as long as you do not stop.",
        "attribution": "Confucius"
    },
    {
        "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
        "attribution": "Franklin D. Roosevelt"
    },
    {
        "quote": "Opportunities don't happen, you create them.",
        "attribution": "Chris Grosser"
    },
    {
        "quote": "Don't watch the clock; do what it does. Keep going.",
        "attribution": "Sam Levenson"
    },
    {
        "quote": "The only real mistake is the one from which we learn nothing.",
        "attribution": "Henry Ford"
    },
    {
        "quote": "Mistakes are the portals of discovery.",
        "attribution": "James Joyce"
    },
    {
        "quote": "It's not how we make mistakes, but how we correct them that defines us.",
        "attribution": "Unknown"
    },
    {
        "quote": "I have not failed. I've just found 10,000 ways that won't work.",
        "attribution": "Thomas Edison"
    },
    {
        "quote": "The greatest mistake you can make in life is to be continually fearing you will make one.",
        "attribution": "Elbert Hubbard"
    },
    {
        "quote": "Mistakes are the stepping stones to wisdom.",
        "attribution": "Unknown"
    },
    {
        "quote": "A mistake is simply another way of doing things.",
        "attribution": "Katharine Graham"
    },
    {
        "quote": "Failure is simply the opportunity to begin again, this time more intelligently.",
        "attribution": "Henry Ford"
    },
    {
        "quote": "Mistakes are proof that you are trying.",
        "attribution": "Unknown"
    },
    {
        "quote": "Admitting our mistakes is a sign of maturity and wisdom. We learn more from knowing our faults than from praising our virtues.",
        "attribution": "Unknown"
    },
    {
        "quote": "Leadership is not about being in charge. It's about taking care of those in your charge.",
        "attribution": "Simon Sinek"
    },
    {
        "quote": "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
        "attribution": "Ronald Reagan"
    },
    {
        "quote": "A leader is one who knows the way, goes the way, and shows the way.",
        "attribution": "John C. Maxwell"
    },
    {
        "quote": "Leadership is the capacity to translate vision into reality.",
        "attribution": "Warren Bennis"
    },
    {
        "quote": "Leadership and learning are indispensable to each other.",
        "attribution": "John F. Kennedy"
    },
    {
        "quote": "Leadership is not about titles, positions, or flowcharts. It is about one life influencing another.",
        "attribution": "John C. Maxwell"
    },
    {
        "quote": "The function of leadership is to produce more leaders, not more followers.",
        "attribution": "Ralph Nader"
    },
    {
        "quote": "Leadership is about making others better as a result of your presence and making sure that impact lasts in your absence.",
        "attribution": "Sheryl Sandberg"
    },
    {
        "quote": "The art of leadership is saying no, not saying yes. It is very easy to say yes.",
        "attribution": "Tony Blair"
    },
    {
        "quote": "Leadership is not about being in the spotlight, but about shining the spotlight on others.",
        "attribution": "Unknown"
    },
    {
        "quote": "A leader is someone who shows the way, goes the way, and leads by example.",
        "attribution": "Unknown"
    },
    {
        "quote": "Forgiveness is the fragrance that the violet sheds on the heel that has crushed it.",
        "attribution": "Mark Twain"
    },
    {
        "quote": "Forgiveness is not an occasional act; it is a constant attitude.",
        "attribution": "Martin Luther King Jr."
    },
    {
        "quote": "The weak can never forgive. Forgiveness is the attribute of the strong.",
        "attribution": "Mahatma Gandhi"
    },
    {
        "quote": "Forgiveness does not change the past, but it does enlarge the future.",
        "attribution": "Paul Boese"
    },
    {
        "quote": "To forgive is to set a prisoner free and discover that the prisoner was you.",
        "attribution": "Lewis B. Smedes"
    },
    {
        "quote": "Forgiveness is a gift you give yourself.",
        "attribution": "Tony Robbins"
    },
    {
        "quote": "Forgiveness is the key to action and freedom.",
        "attribution": "Hannah Arendt"
    },
    {
        "quote": "Forgiveness is the final form of love.",
        "attribution": "Reinhold Niebuhr"
    },
    {
        "quote": "Forgiveness is the economy of the heart... forgiveness saves the expense of anger, the cost of hatred, the waste of spirits.",
        "attribution": "Hannah More"
    },
    {
        "quote": "Forgiveness is the healing of wounds caused by another. You choose to let go of a past wrong and no longer be hurt by it.",
        "attribution": "Unknown"
    },
    {
        "quote": "Hope is being able to see that there is light despite all of the darkness.",
        "attribution": "Desmond Tutu"
    },
    {
        "quote": "Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all.",
        "attribution": "Emily Dickinson"
    },
    {
        "quote": "Once you choose hope, anything's possible.",
        "attribution": "Christopher Reeve"
    },
    {
        "quote": "Hope is important because it can make the present moment less difficult to bear. If we believe that tomorrow will be better, we can bear a hardship today.",
        "attribution": "Thich Nhat Hanh"
    },
    {
        "quote": "Hope is a waking dream.",
        "attribution": "Aristotle"
    },
    {
        "quote": "Hope is a good thing, maybe the best of things, and no good thing ever dies.",
        "attribution": "Stephen King"
    },
    {
        "quote": "Where there is hope, there is faith. Where there is faith, miracles happen.",
        "attribution": "Unknown"
    },
    {
        "quote": "Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us.",
        "attribution": "Samuel Smiles"
    },
    {
        "quote": "Hope is not about proving anything. It's about choosing to believe that something can be better.",
        "attribution": "Kerry Washington"
    },
    {
        "quote": "Hope is the heartbeat of the soul.",
        "attribution": "Michelle Horst"
    },
    {
        "quote": "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.",
        "attribution": "Joyce Meyer"
    },
    {
        "quote": "Patience is bitter, but its fruit is sweet.",
        "attribution": "Aristotle"
    },
    {
        "quote": "Patience is not passive, on the contrary, it is concentrated strength.",
        "attribution": "Bruce Lee"
    },
    {
        "quote": "Patience is the companion of wisdom.",
        "attribution": "Saint Augustine"
    },
    {
        "quote": "Patience, persistence, and perspiration make an unbeatable combination for success.",
        "attribution": "Napoleon Hill"
    },
    {
        "quote": "The two most powerful warriors are patience and time.",
        "attribution": "Leo Tolstoy"
    },
    {
        "quote": "With love and patience, nothing is impossible.",
        "attribution": "Daisaku Ikeda"
    },
    {
        "quote": "Patience is the calm acceptance that things can happen in a different order than the one you have in mind.",
        "attribution": "David G. Allen"
    },
    {
        "quote": "Patience is the art of concealing your impatience.",
        "attribution": "Guy Kawasaki"
    },
    {
        "quote": "Positive thinking will let you do everything better than negative thinking will.",
        "attribution": "Zig Ziglar"
    },
    {
        "quote": "Your positive action combined with positive thinking results in success.",
        "attribution": "Shiv Khera"
    },
    {
        "quote": "Positivity is a choice. Choose wisely.",
        "attribution": "Karen Salmansohn"
    },
    {
        "quote": "The only limit to our realization of tomorrow will be our doubts of today. Let us move forward with strong and active faith.",
        "attribution": "Franklin D. Roosevelt"
    },
    {
        "quote": "Stay positive, work hard, make it happen.",
        "attribution": "Unknown"
    },
    {
        "quote": "Positive anything is better than negative nothing.",
        "attribution": "Elbert Hubbard"
    },
    {
        "quote": "The way to happiness is: keep your heart free from hate, your mind from worry. Live simply, give much. Fill your life with love. Do as you would be done by.",
        "attribution": "Buddha"
    },
    {
        "quote": "Every day may not be good, but there is something good in every day.",
        "attribution": "Alice Morse Earle"
    },
    {
        "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "attribution": "Christian D. Larson"
    },
    {
        "quote": "The positive thinker sees the invisible, feels the intangible, and achieves the impossible.",
        "attribution": "Winston Churchill"
    },
    {
        "quote": "All our dreams can come true, if we have the courage to pursue them.",
        "attribution": "Walt Disney"
    },
    {
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
        "attribution": "Eleanor Roosevelt"
    },
    {
        "quote": "Dream big. Start small. Act now.",
        "attribution": "Robin Sharma"
    },
    {
        "quote": "Dreams are the seedlings of realities.",
        "attribution": "James Allen"
    },
    {
        "quote": "Don't downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny.",
        "attribution": "Unknown"
    },
    {
        "quote": "A dream doesn't become reality through magic; it takes sweat, determination, and hard work.",
        "attribution": "Colin Powell"
    },
    {
        "quote": "You are never too old to set another goal or to dream a new dream.",
        "attribution": "C.S. Lewis"
    },
    {
        "quote": "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
        "attribution": "Joel Brown"
    },
    {
        "quote": "Dreams are not what you see in sleep, dreams are things which do not let you sleep.",
        "attribution": "A.P.J. Abdul Kalam"
    },
    {
        "quote": "Follow your dreams, they know the way.",
        "attribution": "Unknown"
    },
    {
        "quote": "Kindness is a language which the deaf can hear and the blind can see.",
        "attribution": "Mark Twain"
    },
    {
        "quote": "No act of kindness, no matter how small, is ever wasted.",
        "attribution": "Aesop"
    },
    {
        "quote": "Kindness is the sunshine in which virtue grows.",
        "attribution": "Robert Green Ingersoll"
    },
    {
        "quote": "Kindness is the key to unlocking the heart of humanity.",
        "attribution": "Unknown"
    },
    {
        "quote": "Kindness is a gift everyone can afford to give.",
        "attribution": "Unknown"
    },
    {
        "quote": "In a world where you can be anything, be kind.",
        "attribution": "Unknown"
    },
    {
        "quote": "The smallest act of kindness is worth more than the grandest intention.",
        "attribution": "Oscar Wilde"
    },
    {
        "quote": "Be kind whenever possible. It is always possible.",
        "attribution": "Dalai Lama"
    },
    {
        "quote": "Kindness is the language that the deaf can hear and the blind can see.",
        "attribution": "Unknown"
    },
    {
        "quote": "Kindness is the light that dissolves all walls between souls, families, and nations.",
        "attribution": "Paramahansa Yogananda"
    },
    {
        "quote": "Growth is never by mere chance; it is the result of forces working together.",
        "attribution": "James Cash Penney"
    },
    {
        "quote": "The only way that we can grow is if we change. The only way that we can change is if we learn. The only way we can learn is if we are exposed. And the only way that we can become exposed is if we throw ourselves out into the open.",
        "attribution": "C. JoyBell C."
    },
    {
        "quote": "Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don't belong.",
        "attribution": "Mandy Hale"
    },
    {
        "quote": "The greatest growth happens outside of your comfort zone.",
        "attribution": "Unknown"
    },
    {
        "quote": "Don't go through life, grow through life.",
        "attribution": "Eric Butterworth"
    },
    {
        "quote": "The key to growth is acknowledging your fear of the unknown and jumping in anyway.",
        "attribution": "Jen Sincero"
    },
    {
        "quote": "True growth happens when you start to check and correct your own habits, attitudes, and actions.",
        "attribution": "Unknown"
    },
    {
        "quote": "The only limits you have are the limits you believe.",
        "attribution": "Wayne Dyer"
    },
    {
        "quote": "Growth is the great separator between those who succeed and those who do not. When I see a person beginning to separate themselves from the pack, it's almost always due to personal growth.",
        "attribution": "John C. Maxwell"
    },
    {
        "quote": "Personal growth is not a matter of learning new information but of unlearning old limits.",
        "attribution": "Alan Cohen"
    },
    {
        "quote": "The oak fought the wind and was broken, the willow bent when it must and survived.",
        "attribution": "Robert Jordan"
    },
    {
        "quote": "Resilience is accepting your new reality, even if it's less good than the one you had before. You can fight it, you can do nothing but scream about what you've lost, or you can accept that and try to put together something that's good.",
        "attribution": "Elizabeth Edwards"
    },
    {
        "quote": "Resilience is not what happens to you. It's how you react to, respond to, and recover from what happens to you.",
        "attribution": "Jeffrey Gitomer"
    },
    {
        "quote": "The human capacity for burden is like bamboo\u00e2\u20ac\u201dfar more flexible than you'd ever believe at first glance.",
        "attribution": "Jodi Picoult"
    },
    {
        "quote": "Resilience is the ability to bounce back, to keep going, to recover from adversity.",
        "attribution": "Unknown"
    },
    {
        "quote": "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.",
        "attribution": "Maya Angelou"
    },
    {
        "quote": "Resilience is knowing that you are the only one that has the power and the responsibility to pick yourself up.",
        "attribution": "Mary Holloway"
    },
    {
        "quote": "Resilience is accepting your failures, learning from them, and moving on.",
        "attribution": "Unknown"
    },
    {
        "quote": "Fall seven times, stand up eight.",
        "attribution": "Japanese Proverb"
    },
    {
        "quote": "The oak sleeps in the acorn. The bird waits in the egg, and in the highest vision of the soul, a waking angel stirs. Dreams are the seedlings of realities.",
        "attribution": "James Allen"
    },
    {
        "quote": "Faith is taking the first step even when you don't see the whole staircase.",
        "attribution": "Martin Luther King Jr."
    },
    {
        "quote": "Faith is the bird that feels the light when the dawn is still dark.",
        "attribution": "Rabindranath Tagore"
    },
    {
        "quote": "Faith is the strength by which a shattered world shall emerge into the light.",
        "attribution": "Helen Keller"
    },
    {
        "quote": "Faith is to believe what you do not see; the reward of this faith is to see what you believe.",
        "attribution": "Saint Augustine"
    },
    {
        "quote": "Faith is not the belief that God will do what you want. It is the belief that God will do what is right.",
        "attribution": "Max Lucado"
    },
    {
        "quote": "Faith is the art of holding on to things your reason has once accepted in spite of your changing moods.",
        "attribution": "C.S. Lewis"
    },
    {
        "quote": "Doubt your doubts before you doubt your faith.",
        "attribution": "Dieter F. Uchtdorf"
    },
    {
        "quote": "Faith is about believing in something when common sense tells you not to.",
        "attribution": "Unknown"
    },
    {
        "quote": "Faith is the strength by which a shattered world shall emerge into the light.",
        "attribution": "Helen Keller"
    },
    {
        "quote": "Keep faith. The most amazing things in life tend to happen right at the moment you're about to give up hope.",
        "attribution": "Unknown"
    }
]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    } 
}

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
    const no = Math.floor(Math.random() * 10);
    for (var i = 0; i < no; i++) {
        shuffleArray(quotes)
    }
    const { quote, attribution } = getRandomQuote();
    quoteText.textContent = quote;
    quoteAuthor.textContent = `- ${attribution}`;
}

newQuoteBtn.addEventListener('click', displayQuote);

// Initial quote display
displayQuote();
