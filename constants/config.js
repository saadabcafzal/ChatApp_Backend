const corsOptions = {
  origin: "http://localhost:5173",  // Only allow this specific origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

  
  const CHATTU_TOKEN = "chattu-token";
  
  export { corsOptions, CHATTU_TOKEN };