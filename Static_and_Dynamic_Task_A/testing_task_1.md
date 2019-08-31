### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame

  def checkforAce(card) 										# underscore spaces, snake case
    if card.value = 1 											# should use ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)							# def not dif
  if card1.value > card2.value
    return card															# card1 not card
  else
    return card2
  end
end																					# too many ends
end

def self.cards_total(cards)									# no need for self
  total																			# empty array not specified
  for card in cards
    total += card.value
    return "You have a total of" + total		# return ends the loop, should be moved down
  end
end
```
