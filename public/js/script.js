var Helpers = {
  item_is_in_array: function(item, array) {
    var alength = array.length;
    for (var i=0; i < alength; i++) {
      if (array[i] === item) {
        return true;
      }
    }
    return false;
  }
},
ObliqueStrategies = function() {
  var strategies = ["A line has two sides", "Abandon desire", "Abandon normal instructions", "Accept advice", "Adding on", "Always the first steps", "Ask people to work against their better judgement", "Ask your body", "Be dirty", "Be extravagant", "Be less critical", "Breathe more deeply", "Bridges -build -burn", "Change ambiguities to specifics", "Change nothing and continue consistently", "Change specifics to ambiguities", "Consider transitions", "Courage!", "Cut a vital connection", "Decorate", "Destroy nothing; Destroy the most important thing", "Discard an axiom", "Disciplined self-indulgence", "Discover your formulas and abandon them", "Display your talent", "Distort time", "Do nothing for as long as possible", "Do something boring", "Do something sudden", "Do the last thing first", "Do the words need changing?", "Don't avoid what is easy", "Don't break the silence", "Don't stress one thing more than another", "Emphasize differences", "Emphasize the flaws", "Faced with a choice", "Find a safe part and use it as an anchor", "Give the game away", "Give way to your worst impulse", "Go outside. Shut the door.", "Go outside. Shut the door.", "Go to an extreme", "How would someone else do it?", "How would you have done it?", "In total darkness", "Is it finished?", "Is something missing?", "Is the style right?", "It is simply a matter or work", "Just carry on", "Listen to the quiet voice", "Look at the order in which you do things", "Magnify the most difficult details", "Make it more sensual", "Make what's perfect more human", "Move towards the unimportant", "Not building a wall; making a brick", "Once the search has begun", "Only a part", "Only one element of each kind", "Openly resist change", "Pae White's non-blank graphic metacard", "Question the heroic", "Remember quiet evenings", "Remove a restriction", "Repetition is a form of change", "Retrace your steps", "Reverse", "Simple Subtraction", "Slow preparation", "State the problem as clearly as possible", "Take a break", "Take away the important parts", "The inconsistency principle", "The most easily forgotten thing is the most important", "Think - inside the work -outside the work", "Tidy up", "Try faking it (from Stewart Brand)", "Turn it upside down", "Use 'unqualified' people", "Use an old idea", "Use cliches", "Use filters", "Use something nearby as a model", "Use your own ideas", "Voice your suspicions", "Water", "What context would look right?", "What is the simplest solution?", "What mistakes did you make last time?", "What to increase? What to reduce? What to maintain?", "What were you really thinking about just now?", "What would your closest friend do?", "What wouldn't you do?", "When is it for?", "Where is the edge?", "Which parts can be grouped?", "Work at a different speed", "Would anyone want it?", "Your mistake was a hidden intention"],
      num_strategies = strategies.length,
      current_strategy,
      fonts = ["Lora", "Josefin Sans", "Belleza", "Abel", "Droid Sans", "Open Sans", "Yanone Kaffeesatz", "Raleway", "Crimson Text", "Cuprum"],
      $container = $("#container"),
      $obstrat = $("#oblique-strategy"),
      $faves = $("ul#faves"),
      $about = $("#about-content"),
  init = function() {
      addListeners();
      display_random();
      $("body").addClass("one-strategy");
      Display.random_bg();
  },
  center_strategy = function() {
    var container_height = $container.height(),
        strategy_height = $obstrat.height();
    $obstrat.css("marginTop", -1 * (strategy_height / 2));
    $obstrat.css("top", "50%");
  },
  add_fave = function() {
    // Add strategy to local store list
    if (Modernizr.localstorage) {
      var faves = get_faves();
      // Add current strategy to faves list
      if (!Helpers.item_is_in_array(current_strategy, faves)) {
        faves.push(current_strategy);
      }
      // Save updated list in local storage
      obstrat = localStorage.setItem('oblique_strategies_faves', JSON.stringify(faves));
    }
    console.log("called faves... localStorage item `oblique_strategies_faves` is now: ");
    console.log(localStorage.getItem('oblique_strategies_faves'));
  },
  get_faves = function() {
    console.log("get faves... localStorage item `oblique_strategies_faves` is: ");
    console.log(localStorage.getItem('oblique_strategies_faves'));
    return JSON.parse(localStorage.getItem('oblique_strategies_faves')) || [];
  },
  clear_faves = function() {
    localStorage.removeItem('oblique_strategies_faves');
    console.log("clearing faves... localStorage item `oblique_strategies_faves` is now: ");
    console.log(localStorage.getItem('oblique_strategies_faves'));
  },
  random_strategy = function() {
    var rand_strategy_index = Math.floor(Math.random()*num_strategies);
    return strategies[rand_strategy_index];
  },
  random_font = function() {
    var rand_font_index = Math.floor(Math.random()*fonts.length);
    $obstrat.css("fontFamily", fonts[rand_font_index]);
  },
  display_random = function() {
    current_strategy = random_strategy();
    $obstrat.text(current_strategy);
    random_font();
    center_strategy();
    Display.random_bg();
  },
  populate_faves = function() {
    var faves = get_faves(),
        flength = faves.length;
    $faves.html(""); // Clear any HTML
    if (flength === 0) {
      $faves.html("<li>No faves yet. Why don't you add some?</li>");
    }
    for (var i=0; i < flength; i++) {
      $faves.append("<li>" + faves[i] + "</li>");
    }
  },
  addListeners = function() {
    $("#strat-nav #random a").live("click", function(){
      $("body").addClass("one-strategy");
      $("body").removeClass("strategy-list");
      display_random();
      $about.hide();
    });
    $("#strat-nav #fave a").live("click", function(){
      add_fave();
      $about.hide();
    });
    $("#strat-nav #view-faves a").live("click", function(){
      $("body").addClass("strategy-list");
      $("body").removeClass("one-strategy");
      populate_faves();
      $about.hide();
    });
    $("#strat-nav #clear-faves a").live("click", function(){
      var confirmed = confirm('Are you sure you want to clear your faves?');
      if(confirmed) {
        clear_faves();
        populate_faves();
        $about.hide();
      }
    });
    $("#strat-nav #about a").live("click", function(){
      $about.show();
    });
    $("#about-content .close").live("click", function(){
      $about.hide();
    });
  };
  init();
  return {
    get_random: function() {
      return random_strategy();
    }
  };
},
Display = {
  random_bg: function() {
    $("body").css("background", Display.random_rgba());
  },
  random_rgba: function() {
    var randr = Math.floor((Math.random()*255)+1),
        randg = Math.floor((Math.random()*255)+1),
        randb = Math.floor((Math.random()*255)+1),
        randa = Math.floor((Math.random()*9)+1)/10,
    rand_rgba = "rgba(" + randr + ", " + randg + ", " + randb + ", " + randa + ")";
    return rand_rgba;
  }
};


var obstrat = ObliqueStrategies();

