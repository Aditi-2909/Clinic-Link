import ChatBot from "react-chatbotify";

const Chatbot = () => {

  const flow = {
    start: {
      message: "👋 Hi there! Welcome to ClinicLink.",
      path: "options"
    },

    options: {
      message: "How can I help you today?",
      options: [
        "📅 Book Appointment",
        "👨‍⚕️ View Doctors",
        "🕒 ClinicLink Timing"
      ],
      path: (params) => {
        const input = params.userInput.toLowerCase();

        if (input.includes("book")) return "redirect";
        if (input.includes("doctor")) return "redirect";
        if (input.includes("timing")) return "timing";

        return "options";
      }
    },

    
    redirect: {
      message: "👉 Opening doctors page...",
      component: () => {
        window.location.href = "/doctors";
        return null;
      }
    },

    timing: {
      message: "🕒 ClinicLink is open from 9 AM to 9 PM.",
      path: "end"
    },

    end: {
      message: "👍 Need anything else?",
      path: "options"
    }
  };

  const settings = {
    header: {
    title: "ClinicLink Assistant"
  }
  };

  return <ChatBot flow={flow} settings={settings}/>;
};

export default Chatbot;