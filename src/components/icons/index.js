import ArrowLeft from './arrow-left.svg';
import ArrowRight from './arrow-right.svg';
import DrinkWine from './drink-wine.svg';
import DrinkCocktail from './drink-cocktail.svg';
import DrinkBottleBer from './drink-bottle-beer.svg';
import DrinkDraftBeer from './drink-draft-beer.svg';
import DrinkLongDrink from './drink-long-drink.svg';
import DrinkShortDrink from './drink-short-drink.svg';
import DrinkBrandy from './drink-brandy.svg';
import DrinkShot from './drink-shot.svg';
import DrinkFlute from './drink-flute.svg';

const getIconById = id => {
  switch (id) {
    case 'ARROW_LEFT': return (ArrowLeft);
    case 'ARROW_RIGHT': return (ArrowRight);
    case 'WINE': return (DrinkWine);
    case 'COCKTAIL': return (DrinkCocktail);
    case 'BOTTLE_BEER': return (DrinkBottleBer);
    case 'DRAFT_BEER': return (DrinkDraftBeer);
    case 'LONG_DRINK': return (DrinkLongDrink);
    case 'SHORT_DRINK': return (DrinkShortDrink);
    case 'BRANDY': return (DrinkBrandy);
    case 'SHOT': return (DrinkShot);
    case 'FLUTE': return (DrinkFlute);
    default: return null;
  }
};

export {
  getIconById,
  ArrowLeft,
  ArrowRight,
  DrinkWine,
  DrinkCocktail,
  DrinkDraftBeer,
  DrinkLongDrink,
  DrinkBottleBer,
  DrinkShortDrink,
  DrinkBrandy,
  DrinkShot,
  DrinkFlute,
};

