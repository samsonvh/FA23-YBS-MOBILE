export interface loginInformation {
  email?: string | null;
  password?: string | null;
  idToken?: string | null;
}

export interface authResponse {
  accessToken: string;
  refreshToken: string;
  userName: string;
  email: string;
  role: string;
  image?: string | null;
}

export interface popularDestination {
  id: number;
  name: string;
  image: string;
}

export interface routeListItem {
  id: number;
  location: string;
  name: string;
  departs: string;
  price: number;
  image: string;
}
