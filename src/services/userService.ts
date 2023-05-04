import { User } from '../typedefs';

let users: User[] = [
  {
    id: 1,
    name: 'Miss Annie Welch',
    email: 'Larissa.Upton@yahoo.com'
  },
  {
    id: 4,
    name: 'Geraldine Howell',
    email: 'Chase_Marks15@hotmail.com'
  },
  {
    id: 6,
    name: 'Lorenzo Torp',
    email: 'Arvel23@yahoo.com'
  },
  {
    id: 7,
    name: 'Neal Turner',
    email: 'Burley.West@hotmail.com'
  },
  {
    id: 9,
    name: 'Eula Hand',
    email: 'Tess_Mitchell30@gmail.com'
  },
  {
    id: 10,
    name: 'Mattie Schowalter',
    email: 'Peggie_Steuber@yahoo.com'
  },
  {
    id: 13,
    name: 'Eugene Lynch',
    email: 'Triston_Oberbrunner75@hotmail.com'
  },
  {
    id: 15,
    name: 'Clifford Welch',
    email: 'Horacio90@yahoo.com'
  },
  {
    id: 30,
    name: 'Sherri Gottlieb',
    email: 'Frederick.Herzog60@gmail.com'
  },
  {
    id: 42,
    name: 'Cecilia Kunze',
    email: 'Luz27@yahoo.com'
  },
  {
    id: 74,
    name: 'Wilbur Harber',
    email: 'Pierce78@gmail.com'
  },
  {
    id: 75,
    name: 'Dr. Lydia Corwin',
    email: 'Reagan_Flatley43@yahoo.com'
  },
  {
    id: 81,
    name: 'Erik Roberts',
    email: 'Amari_Predovic32@yahoo.com'
  },
  {
    id: 83,
    name: 'Doris Walker',
    email: 'Sonny.Stokes@hotmail.com'
  },
  {
    id: 98,
    name: 'Mr. Johnathan Swift',
    email: 'Abbie.Runolfsson@yahoo.com'
  },
  {
    id: 180,
    name: 'Jordan Kuvalis',
    email: 'Micheal.OKon3@yahoo.com'
  },
  {
    id: 999,
    name: 'Wilma Mosciski',
    email: 'Joe.Upton@gmail.com'
  },
  {
    id: 1044,
    name: 'Luz Feil DDS',
    email: 'Violet_Schmeler79@gmail.com'
  },
  {
    id: 3112,
    name: 'Mr. Sandra Brakus',
    email: 'Alvah_Hyatt@yahoo.com'
  },
  {
    id: 3455,
    name: 'Michele Weber',
    email: 'Adelle.Johnson72@yahoo.com'
  },
  {
    id: 4121,
    name: 'Nichole Bashirian',
    email: 'Rod_Lindgren@gmail.com'
  },
  {
    id: 4122,
    name: 'Ted Torp',
    email: 'Zita68@hotmail.com'
  },
  {
    id: 4123,
    name: 'Rudy Nienow MD',
    email: 'Whitney8@hotmail.com'
  }
];

export class UsersService {
  users: User[];

  constructor() {
    this.users = users;
  }

  getAllUsers = () => {
    return users;
  }

  addUser = (userValues: Omit<User, 'id'>) => {
    const maxId = this.users.length
      ? Math.max(...this.users.map(({ id}) => id))
      : 0;
    const { name, email } = userValues;
    const newUser = {
      id: maxId + 1,
      name,
      email,
    }
    
    this.users.push(newUser);
    
    return newUser;
  }
}
