
import Contribution from './Contribution';
import Format from './Format';

interface Book {
  id: number;
  title: string;
  subtitle?: string;
  image?: string;
  description: string;
  contributions: Contribution[];
  // formats: Format[];
}

export default Book;
