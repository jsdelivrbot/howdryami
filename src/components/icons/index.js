import LoadLogo from './load-logo.svg';
import ArrowLeft from './arrow-left.svg';
import ArrowRight from './arrow-right.svg';
import AddItem from './add-item.svg';
import Book from './book.svg';
import Clock from './clock.svg';
import Edit from './edit.svg';
import Delete from './delete.svg';
import DrinkWine from './drink-wine.svg';
import DrinkCocktail from './drink-cocktail.svg';
import DrinkBottleBer from './drink-bottle-beer.svg';
import DrinkDraftBeer from './drink-draft-beer.svg';
import DrinkLongDrink from './drink-long-drink.svg';
import DrinkShortDrink from './drink-short-drink.svg';
import DrinkBrandy from './drink-brandy.svg';
import DrinkShot from './drink-shot.svg';
import DrinkFlute from './drink-flute.svg';
import GraphIllustration from './graph-illustration.svg';
import MenuIcon from './menu-icon.svg';
import Person from './person.svg';
import Nuke from './nuke.svg';
import Shield from './shield.svg';
import Close from './close.svg';

const getIconById = id => {
  switch (id) {
    case 'LOAD_LOGO': return (LoadLogo);
    case 'ARROW_LEFT': return (ArrowLeft);
    case 'ARROW_RIGHT': return (ArrowRight);
    case 'ADD_ITEM': return (AddItem);
    case 'BOOK': return (Book);
    case 'CLOCK': return (Clock);
    case 'EDIT': return (Edit);
    case 'DELETE': return (Delete);
    case 'WINE': return (DrinkWine);
    case 'COCKTAIL': return (DrinkCocktail);
    case 'BOTTLE_BEER': return (DrinkBottleBer);
    case 'DRAFT_BEER': return (DrinkDraftBeer);
    case 'LONG_DRINK': return (DrinkLongDrink);
    case 'SHORT_DRINK': return (DrinkShortDrink);
    case 'BRANDY': return (DrinkBrandy);
    case 'SHOT': return (DrinkShot);
    case 'FLUTE': return (DrinkFlute);
    case 'MENU_ICON': return (MenuIcon);
    case 'PERSON': return (Person);
    case 'Nuke': return (Nuke);
    case 'Shield': return (Shield);
    case 'Close': return (Close);
    case 'GRAPH_ILLUSTRATION': return (GraphIllustration);
    default: return null;
  }
};

export {
  getIconById,
  LoadLogo,
  ArrowLeft,
  ArrowRight,
  Book,
  Clock,
  Edit,
  Delete,
  AddItem,
  DrinkWine,
  DrinkCocktail,
  DrinkDraftBeer,
  DrinkLongDrink,
  DrinkBottleBer,
  DrinkShortDrink,
  DrinkBrandy,
  DrinkShot,
  DrinkFlute,
  GraphIllustration,
  MenuIcon,
  Person,
  Nuke,
  Shield,
  Close,
};

