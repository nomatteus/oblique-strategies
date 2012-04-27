var strategies = ["A line has two sides", "Abandon desire", "Abandon normal instructions", "Accept advice", "Adding on", "Always the first steps", "Ask people to work against their better judgement", "Ask your body", "Be dirty", "Be extravagant", "Be less critical", "Breathe more deeply", "Bridges -build -burn", "Change ambiguities to specifics", "Change nothing and continue consistently", "Change specifics to ambiguities", "Consider transitions", "Courage!", "Cut a vital connection", "Decorate", "Destroy nothing; Destroy the most important thing", "Discard an axiom", "Disciplined self-indulgence", "Discover your formulas and abandon them", "Display your talent", "Distort time", "Do nothing for as long as possible", "Do something boring", "Do something sudden", "Do the last thing first", "Do the words need changing?", "Don't avoid what is easy", "Don't break the silence", "Don't stress one thing more than another", "Emphasize differences", "Emphasize the flaws", "Faced with a choice", "Find a safe part and use it as an anchor", "Give the game away", "Give way to your worst impulse", "Go outside. Shut the door.", "Go outside. Shut the door.", "Go to an extreme", "How would someone else do it?", "How would you have done it?", "In total darkness", "Is it finished?", "Is something missing?", "Is the style right?", "It is simply a matter or work", "Just carry on", "Listen to the quiet voice", "Look at the order in which you do things", "Magnify the most difficult details", "Make it more sensual", "Make what's perfect more human", "Move towards the unimportant", "Not building a wall; making a brick", "Once the search has begun", "Only a part", "Only one element of each kind", "Openly resist change", "Pae White's non-blank graphic metacard", "Question the heroic", "Remember quiet evenings", "Remove a restriction", "Repetition is a form of change", "Retrace your steps", "Reverse", "Simple Subtraction", "Slow preparation", "State the problem as clearly as possible", "Take a break", "Take away the important parts", "The inconsistency principle", "The most easily forgotten thing is the most important", "Think - inside the work -outside the work", "Tidy up", "Try faking it (from Stewart Brand)", "Turn it upside down", "Use 'unqualified' people", "Use an old idea", "Use cliches", "Use filters", "Use something nearby as a model", "Use your own ideas", "Voice your suspicions", "Water", "What context would look right?", "What is the simplest solution?", "What mistakes did you make last time?", "What to increase? What to reduce? What to maintain?", "What were you really thinking about just now?", "What would your closest friend do?", "What wouldn't you do?", "When is it for?", "Where is the edge?", "Which parts can be grouped?", "Work at a different speed", "Would anyone want it?", "Your mistake was a hidden intention"];

var ObliqueStrategies = function() {
  var init = function() {
    if (Modernizr.localstorage) {
      var obstrat;
      obstrat = localStorage.getItem('oblique_strategies');
      console.log(JSON.parse(obstrat));
      if (obstrat === null) {
        obstrat = localStorage.setItem('oblique_strategies', JSON.stringify(strategies));
      }
    }
  };
  init();
  return {

  };
};

var obstrat = ObliqueStrategies();
