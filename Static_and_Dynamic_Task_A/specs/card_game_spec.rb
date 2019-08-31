require("pry")
require("minitest/autorun")
require("minitest")
require_relative("../card_game")
require_relative("../card")

class CardGameTest < MiniTest::Test

  def setup
    @card1 = Card.new("Hearts", 8)
    @card2 = Card.new("Spades", 1)
    @cards = [@card1, @card2]
    @cardgame = CardGame.new()
  end

  def test_checkforAce
    assert_equal(true, @cardgame.check_for_ace(@card2))
  end

  def test_highest_card
    assert_equal(@card1, @cardgame.highest_card(@card1, @card2))
  end

  def test_cards_total
    expected = "You have a total of 9"
    actual = @cardgame.cards_total(@cards)
    assert_equal(expected, actual)
  end

end
