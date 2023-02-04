declare class APIFeatures {
    query: any;
    queryString: any;
    constructor(query: any, queryString: any);
    filter(): this;
    sort(): this;
    limitFields(): this;
    paginate(): this;
}
export default APIFeatures;
