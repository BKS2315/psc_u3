let navbar = ()=>{
    return` <div id="search_bar">
    <input type="text" id="query">

    <div id="select">
    <select name="Sort by" id="sorting">
            <option >sort by</option>
            <option id="latest" value="latest">latest</option>
            <option id="oldest" value="oldest">oldest</option>
            <option id="popular" value="popular">popular</option>
    </select>
    <select name="filter" id="filter" placeholder="Filter">
            <option >filter</option>
            <option id="landscape"value="landscape">landscape</option>
            <option id="portrait"value="portrait">portrait</option>
            <option id="squarish"value="squarish">squarish</option>
    </select>
    </div>
</div>

</div>
<div id="categories">
<h3 id="nature">Nature</h3>
<h3 id="car">Cars</h3>
<h3 id="music">Music</h3>
<h3 id="cartoons">Cartoons</h3>
<h3 id="technology">Technology</h3>
<h3 id="marvel">Marvel</h3>
</div>`
};
export {navbar};