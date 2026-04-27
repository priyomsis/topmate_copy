export interface Service {
  id: string;
  title: string;
  description: string;
  price: string; // formatted eg. "$49"
}

export interface Creator {
  username: string;
  name: string;
  avatarUrl: string;
  bio: string;
  services: Service[];
}
