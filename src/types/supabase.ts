/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/': {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  '/DeletedRecords': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.DeletedRecords.id'];
          created_at?: parameters['rowFilter.DeletedRecords.created_at'];
          repo?: parameters['rowFilter.DeletedRecords.repo'];
          sourceRepo?: parameters['rowFilter.DeletedRecords.sourceRepo'];
          isFork?: parameters['rowFilter.DeletedRecords.isFork'];
          userId?: parameters['rowFilter.DeletedRecords.userId'];
          repoDetails?: parameters['rowFilter.DeletedRecords.repoDetails'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['DeletedRecords'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** DeletedRecords */
          DeletedRecords?: definitions['DeletedRecords'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.DeletedRecords.id'];
          created_at?: parameters['rowFilter.DeletedRecords.created_at'];
          repo?: parameters['rowFilter.DeletedRecords.repo'];
          sourceRepo?: parameters['rowFilter.DeletedRecords.sourceRepo'];
          isFork?: parameters['rowFilter.DeletedRecords.isFork'];
          userId?: parameters['rowFilter.DeletedRecords.userId'];
          repoDetails?: parameters['rowFilter.DeletedRecords.repoDetails'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.DeletedRecords.id'];
          created_at?: parameters['rowFilter.DeletedRecords.created_at'];
          repo?: parameters['rowFilter.DeletedRecords.repo'];
          sourceRepo?: parameters['rowFilter.DeletedRecords.sourceRepo'];
          isFork?: parameters['rowFilter.DeletedRecords.isFork'];
          userId?: parameters['rowFilter.DeletedRecords.userId'];
          repoDetails?: parameters['rowFilter.DeletedRecords.repoDetails'];
        };
        body: {
          /** DeletedRecords */
          DeletedRecords?: definitions['DeletedRecords'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/UpdatedRecords': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.UpdatedRecords.id'];
          created_at?: parameters['rowFilter.UpdatedRecords.created_at'];
          repo?: parameters['rowFilter.UpdatedRecords.repo'];
          userId?: parameters['rowFilter.UpdatedRecords.userId'];
          initialRepoDetails?: parameters['rowFilter.UpdatedRecords.initialRepoDetails'];
          updatedFields?: parameters['rowFilter.UpdatedRecords.updatedFields'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['UpdatedRecords'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** UpdatedRecords */
          UpdatedRecords?: definitions['UpdatedRecords'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.UpdatedRecords.id'];
          created_at?: parameters['rowFilter.UpdatedRecords.created_at'];
          repo?: parameters['rowFilter.UpdatedRecords.repo'];
          userId?: parameters['rowFilter.UpdatedRecords.userId'];
          initialRepoDetails?: parameters['rowFilter.UpdatedRecords.initialRepoDetails'];
          updatedFields?: parameters['rowFilter.UpdatedRecords.updatedFields'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.UpdatedRecords.id'];
          created_at?: parameters['rowFilter.UpdatedRecords.created_at'];
          repo?: parameters['rowFilter.UpdatedRecords.repo'];
          userId?: parameters['rowFilter.UpdatedRecords.userId'];
          initialRepoDetails?: parameters['rowFilter.UpdatedRecords.initialRepoDetails'];
          updatedFields?: parameters['rowFilter.UpdatedRecords.updatedFields'];
        };
        body: {
          /** UpdatedRecords */
          UpdatedRecords?: definitions['UpdatedRecords'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  DeletedRecords: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /** Format: text */
    repo: string;
    /** Format: text */
    sourceRepo?: string;
    /**
     * Format: boolean
     * @default false
     */
    isFork: boolean;
    /** Format: uuid */
    userId: string;
    /** Format: json */
    repoDetails: unknown;
  };
  UpdatedRecords: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp without time zone
     * @default now()
     */
    created_at: string;
    /** Format: text */
    repo: string;
    /** Format: uuid */
    userId?: string;
    /** Format: json */
    initialRepoDetails: {
      prevTopics: string[];
    };
    /** Format: json */
    updatedFields: {
      topics: string[];
    };
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: 'params=single-object';
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: 'return=representation' | 'return=minimal' | 'return=none';
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: 'count=none';
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description DeletedRecords */
  'body.DeletedRecords': definitions['DeletedRecords'];
  /** Format: bigint */
  'rowFilter.DeletedRecords.id': string;
  /** Format: timestamp with time zone */
  'rowFilter.DeletedRecords.created_at': string;
  /** Format: text */
  'rowFilter.DeletedRecords.repo': string;
  /** Format: text */
  'rowFilter.DeletedRecords.sourceRepo': string;
  /** Format: boolean */
  'rowFilter.DeletedRecords.isFork': string;
  /** Format: uuid */
  'rowFilter.DeletedRecords.userId': string;
  /** Format: json */
  'rowFilter.DeletedRecords.repoDetails': string;
  /** @description UpdatedRecords */
  'body.UpdatedRecords': definitions['UpdatedRecords'];
  /** Format: bigint */
  'rowFilter.UpdatedRecords.id': string;
  /** Format: timestamp without time zone */
  'rowFilter.UpdatedRecords.created_at': string;
  /** Format: text */
  'rowFilter.UpdatedRecords.repo': string;
  /** Format: uuid */
  'rowFilter.UpdatedRecords.userId': string;
  /** Format: json */
  'rowFilter.UpdatedRecords.initialRepoDetails': string;
  /** Format: json */
  'rowFilter.UpdatedRecords.updatedFields': string;
}
