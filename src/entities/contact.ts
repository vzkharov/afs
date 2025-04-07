type Contact = {
  id: string;
  lastname: string;
  firstname: string;
  phone: string;
  email: string;

  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
};

export type { Contact };
