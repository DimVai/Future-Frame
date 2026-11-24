import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
Chatbot.init({
    chatflowid: "3ddc1413-4728-48d3-9d32-1a23833930bd",
    apiHost: "https://dim-flowise.up.railway.app",
    chatflowConfig: {
        /* Chatflow Config */
    },
    observersConfig: {
        /* Observers Config */
    },
    theme: {
        button: {
            backgroundColor: 'indigo',
            right: 20,
            bottom: 20,
            size: 72,
            dragAndDrop: true,
            iconColor: 'white',
            customIconSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png',
            autoWindowOpen: {
                autoOpen: false,
                openDelay: 2,
                autoOpenOnMobile: false
            }
        },
        tooltip: {
            showTooltip: true,
            tooltipMessage: 'Γεια σου 👋!',
            tooltipBackgroundColor: 'black',
            tooltipTextColor: 'white',
            tooltipFontSize: 16
        },
        // disclaimer: {
        //     title: 'Προσοχή',
        //     message: "Χρησιμοποιώντας αυτό το chatbot, αποδέχεστε τους <a target=\"_blank\" href=\"https://flowiseai.com/terms\">Όρους & Προϋποθέσεις</a>",
        //     textColor: 'black',
        //     buttonColor: '#3b82f6',
        //     buttonText: 'Έναρξη Συνομιλίας',
        //     buttonTextColor: 'white',
        //     blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
        //     backgroundColor: 'white'
        // },
        customCSS: `
            *{font-weight: 400;}
            textarea.text-input {
                scrollbar-width: thin;
                scrollbar-color: #7653a6 transparent;
            }
            span:has(a.lite-badge) {
                opacity: 0;
                padding: 0;
            }
        `,
        chatWindow: {
            showTitle: true,
            showAgentMessages: true,
            title: 'Βοηθός',
            titleAvatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png',
            welcomeMessage: 'Καλησπέρα! Πως μπορώ να βοηθήσω.',
            errorMessage: 'Συνέβη κάποιο σφάλμα.',
            backgroundColor: 'lavender',
            backgroundImage: 'enter image path or link',
            height: 700,
            width: 400,
            fontSize: 16,
            // starterPrompts: [
            //     "Τι υπηρεσίες προσφέρετε;",
            //     "Πως μπορώ να επικοινωνήσω μαζί σας;"
            // ],
            starterPromptFontSize: 16,
            clearChatOnReload: false,
            sourceDocsTitle: 'Πηγές:',
            renderHTML: true,
            botMessage: {
                backgroundColor: '#f7f8ff',
                textColor: '#303235',
                showAvatar: true,
                avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png'
            },
            userMessage: {
                backgroundColor: '#3B81F6',
                textColor: '#ffffff',
                showAvatar: true,
                avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
            },
            textInput: {
                placeholder: 'Πληκτρολόγησε την ερώτησή σου',
                backgroundColor: '#ffffff',
                textColor: '#303235',
                sendButtonColor: 'indigo',
                maxChars: 80,
                maxCharsWarningMessage: 'Ξεπέρασες το όριο χαρακτήρων. Παρακαλώ γράψε λιγότερους από 80 χαρακτήρες.',
                autoFocus: true,
                sendMessageSound: true,
                sendSoundLocation: 'send_message.mp3',
                receiveMessageSound: true,
                receiveSoundLocation: 'receive_message.mp3'
            },
            feedback: {
                color: '#303235'
            },
            dateTimeToggle: {
                date: true,
                time: true
            },
            footer: {
                textColor: 'lavender' ?? '#303235',
                text: 'Με την υποστήριξη του',
                company: 'Flowise',
                companyLink: 'https://flowiseai.com'
            }
        }
    }
})
