var deck = [
  { number: 1, suit: 'spades' },
  { number: 2, suit: 'spades' },
  { number: 3, suit: 'spades' },
  { number: 4, suit: 'spades' },
  { number: 5, suit: 'spades' },
  { number: 6, suit: 'spades' },
  { number: 7, suit: 'spades' },
  { number: 8, suit: 'spades' },
  { number: 9, suit: 'spades' },
  { number: 10, suit: 'spades' },
  { number: 11, suit: 'spades' },
  { number: 12, suit: 'spades' },
  { number: 13, suit: 'spades' },
  { number: 1, suit: 'diamonds' },
  { number: 2, suit: 'diamonds' },
  { number: 3, suit: 'diamonds' },
  { number: 4, suit: 'diamonds' },
  { number: 5, suit: 'diamonds' },
  { number: 6, suit: 'diamonds' },
  { number: 7, suit: 'diamonds' },
  { number: 8, suit: 'diamonds' },
  { number: 9, suit: 'diamonds' },
  { number: 10, suit: 'diamonds' },
  { number: 11, suit: 'diamonds' },
  { number: 12, suit: 'diamonds' },
  { number: 13, suit: 'diamonds' },
  { number: 1, suit: 'hearts' },
  { number: 2, suit: 'hearts' },
  { number: 3, suit: 'hearts' },
  { number: 4, suit: 'hearts' },
  { number: 5, suit: 'hearts' },
  { number: 6, suit: 'hearts' },
  { number: 7, suit: 'hearts' },
  { number: 8, suit: 'hearts' },
  { number: 9, suit: 'hearts' },
  { number: 10, suit: 'hearts' },
  { number: 11, suit: 'hearts' },
  { number: 12, suit: 'hearts' },
  { number: 13, suit: 'hearts' },
  { number: 1, suit: 'clubs' },
  { number: 2, suit: 'clubs' },
  { number: 3, suit: 'clubs' },
  { number: 4, suit: 'clubs' },
  { number: 5, suit: 'clubs' },
  { number: 6, suit: 'clubs' },
  { number: 7, suit: 'clubs' },
  { number: 8, suit: 'clubs' },
  { number: 9, suit: 'clubs' },
  { number: 10, suit: 'clubs' },
  { number: 11, suit: 'clubs' },
  { number: 12, suit: 'clubs' },
  { number: 13, suit: 'clubs' }
]

$( document ).ready( function(){
  $( '#drawCardFromBottom' ).on( 'click', function(){
    console.log( 'in drawCardFromBottom');
    console.log( 'last card:', deck[ deck.length-1 ] );
    // empty div
    clearTable();
    // append the last card to the div (place on table)
    $( '#allCards' ).append( "<div class='card " + deck[ deck.length-1 ].suit + "' data-number='" + deck[ deck.length-1 ].number + "'>" + deck[ deck.length-1 ].number + "</div>" );
    // example block
    // <div class='card spades' data-number='10'>10</div>
  }); // end drawCardFromBottom

  $( '#drawCardFromTop' ).on( 'click', function(){
    console.log( 'in drawCardFromTop');
    console.log( 'first card:', deck[0]);
    // empty allCards
    clearTable();
    // append to allCards this card
    $( '#allCards' ).append( "<div class='card " + deck[0].suit + "' data-number='" + deck[0].number + "'>" + deck[0].number + "</div>" );

    // example block
    // <div class='card diamonds' data-number='3'>3</div>
  }); // end drawCardFromTop

  $( '#drawRandomCard' ).on( 'click', function(){
    console.log( 'in drawRandomCard');
  }); // end drawRandomCard

  $( '#hideAll' ).on( 'click', function(){
    console.log( 'in hideAll');
    clearTable();
  }); // end hideAll

  $( '#showDeck' ).on( 'click', function(){
    console.log( 'in showDeck');
    clearTable();
    // loop through deck
    for (var i = 0; i < deck.length; i++) {
      // display each card
      $( '#allCards' ).append( "<div class='card " + deck[i].suit + "' data-number='" + deck[i].number + "'>" + deck[i].number + "</div>" );
    }

  }); // end showDeck

  $( '#shuffleDeck' ).on( 'click', function(){
    console.log( 'in shuffleDeck');
  }); // end shuffleDeck
}); // end doc  ready

$( document ).on( 'click', '.card', function(){
  // when we click on a card we'll want to know on what card we clicked
  console.log( 'in card class click' );
  // get the card's number from it's data-number property
  // log out the card
}); // end card class on click


var clearTable = function(){
  console.log( 'in clearTable' );
  // empty allCards by id
  $( '#allCards' ).empty();
}; // end clearTable
