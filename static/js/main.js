const endpoint = '../../data/search-autocomplete.json';
const matchItems = [];
fetch(endpoint).then(raw => raw.json()).then(data => matchItems.push(...data));

function findMatches(wordToMatch, matchItems) {
  return matchItems.filter(matchItem => {
    const regex = new RegExp(wordToMatch, "gi");
    return matchItem.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, matchItems);
  const html = matchArray.map(matchItem => {
    const regex = new RegExp(this.value, 'gi');
    const item = matchItem.replace(regex, `${this.value}`);
    return `<li class="match-item">${item}</li>`;
  }).join('');

  if (searchInput.value.length > 0) {
    matchList.innerHTML = html;
  } else {
    matchList.innerHTML = '';
  }
}

const searchInput = document.querySelector("#search");
const matchList = document.querySelector("#match-list");
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZW5kcG9pbnQiLCJtYXRjaEl0ZW1zIiwiZmV0Y2giLCJ0aGVuIiwicmF3IiwianNvbiIsImRhdGEiLCJwdXNoIiwiZmluZE1hdGNoZXMiLCJ3b3JkVG9NYXRjaCIsImZpbHRlciIsIm1hdGNoSXRlbSIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2giLCJudW1iZXJXaXRoQ29tbWFzIiwieCIsInRvU3RyaW5nIiwicmVwbGFjZSIsImRpc3BsYXlNYXRjaGVzIiwibWF0Y2hBcnJheSIsInZhbHVlIiwiaHRtbCIsIm1hcCIsIml0ZW0iLCJqb2luIiwic2VhcmNoSW5wdXQiLCJsZW5ndGgiLCJtYXRjaExpc3QiLCJpbm5lckhUTUwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxRQUFRLEdBQUcscUNBQWpCO0FBRUEsTUFBTUMsVUFBVSxHQUFHLEVBQW5CO0FBRUFDLEtBQUssQ0FBQ0YsUUFBRCxDQUFMLENBQ0VHLElBREYsQ0FDT0MsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFEZCxFQUVFRixJQUZGLENBRU9HLElBQUksSUFBSUwsVUFBVSxDQUFDTSxJQUFYLENBQWdCLEdBQUdELElBQW5CLENBRmY7O0FBSUEsU0FBU0UsV0FBVCxDQUFxQkMsV0FBckIsRUFBa0NSLFVBQWxDLEVBQThDO0FBQzdDLFNBQU9BLFVBQVUsQ0FBQ1MsTUFBWCxDQUFrQkMsU0FBUyxJQUFJO0FBQ3JDLFVBQU1DLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVdKLFdBQVgsRUFBd0IsSUFBeEIsQ0FBZDtBQUNBLFdBQU9FLFNBQVMsQ0FBQ0csS0FBVixDQUFnQkYsS0FBaEIsQ0FBUDtBQUNBLEdBSE0sQ0FBUDtBQUlBOztBQUVELFNBQVNHLGdCQUFULENBQTBCQyxDQUExQixFQUE2QjtBQUM1QixTQUFPQSxDQUFDLENBQUNDLFFBQUYsR0FBYUMsT0FBYixDQUFxQix1QkFBckIsRUFBOEMsR0FBOUMsQ0FBUDtBQUNBOztBQUVELFNBQVNDLGNBQVQsR0FBMEI7QUFDekIsUUFBTUMsVUFBVSxHQUFHWixXQUFXLENBQUMsS0FBS2EsS0FBTixFQUFhcEIsVUFBYixDQUE5QjtBQUNBLFFBQU1xQixJQUFJLEdBQUdGLFVBQVUsQ0FBQ0csR0FBWCxDQUFlWixTQUFTLElBQUk7QUFDeEMsVUFBTUMsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBVyxLQUFLUSxLQUFoQixFQUF1QixJQUF2QixDQUFkO0FBQ0EsVUFBTUcsSUFBSSxHQUFHYixTQUFTLENBQUNPLE9BQVYsQ0FBa0JOLEtBQWxCLEVBQTBCLEdBQUUsS0FBS1MsS0FBTSxFQUF2QyxDQUFiO0FBQ0EsV0FBUSwwQkFBeUJHLElBQUssT0FBdEM7QUFDQSxHQUpZLEVBSVZDLElBSlUsQ0FJTCxFQUpLLENBQWI7O0FBS0EsTUFBSUMsV0FBVyxDQUFDTCxLQUFaLENBQWtCTSxNQUFsQixHQUEyQixDQUEvQixFQUFrQztBQUNqQ0MsSUFBQUEsU0FBUyxDQUFDQyxTQUFWLEdBQXNCUCxJQUF0QjtBQUNBLEdBRkQsTUFFTztBQUNOTSxJQUFBQSxTQUFTLENBQUNDLFNBQVYsR0FBc0IsRUFBdEI7QUFDQTtBQUNEOztBQUVELE1BQU1ILFdBQVcsR0FBR0ksUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQXBCO0FBQ0EsTUFBTUgsU0FBUyxHQUFHRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFDQUwsV0FBVyxDQUFDTSxnQkFBWixDQUE2QixRQUE3QixFQUF1Q2IsY0FBdkM7QUFDQU8sV0FBVyxDQUFDTSxnQkFBWixDQUE2QixPQUE3QixFQUFzQ2IsY0FBdEMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbmRwb2ludCA9ICcuLi8uLi9kYXRhL3NlYXJjaC1hdXRvY29tcGxldGUuanNvbic7XHJcblxyXG5jb25zdCBtYXRjaEl0ZW1zID0gW107XHJcblxyXG5mZXRjaChlbmRwb2ludClcclxuXHQudGhlbihyYXcgPT4gcmF3Lmpzb24oKSlcclxuXHQudGhlbihkYXRhID0+IG1hdGNoSXRlbXMucHVzaCguLi5kYXRhKSk7XHJcblxyXG5mdW5jdGlvbiBmaW5kTWF0Y2hlcyh3b3JkVG9NYXRjaCwgbWF0Y2hJdGVtcykge1xyXG5cdHJldHVybiBtYXRjaEl0ZW1zLmZpbHRlcihtYXRjaEl0ZW0gPT4ge1xyXG5cdFx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHdvcmRUb01hdGNoLCBcImdpXCIpO1xyXG5cdFx0cmV0dXJuIG1hdGNoSXRlbS5tYXRjaChyZWdleCk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG51bWJlcldpdGhDb21tYXMoeCkge1xyXG5cdHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU1hdGNoZXMoKSB7XHJcblx0Y29uc3QgbWF0Y2hBcnJheSA9IGZpbmRNYXRjaGVzKHRoaXMudmFsdWUsIG1hdGNoSXRlbXMpO1xyXG5cdGNvbnN0IGh0bWwgPSBtYXRjaEFycmF5Lm1hcChtYXRjaEl0ZW0gPT4ge1xyXG5cdFx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHRoaXMudmFsdWUsICdnaScpO1xyXG5cdFx0Y29uc3QgaXRlbSA9IG1hdGNoSXRlbS5yZXBsYWNlKHJlZ2V4LCBgJHt0aGlzLnZhbHVlfWApO1xyXG5cdFx0cmV0dXJuIGA8bGkgY2xhc3M9XCJtYXRjaC1pdGVtXCI+JHtpdGVtfTwvbGk+YDtcclxuXHR9KS5qb2luKCcnKTtcclxuXHRpZiAoc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xyXG5cdFx0bWF0Y2hMaXN0LmlubmVySFRNTCA9IGh0bWw7XHJcblx0fSBlbHNlIHtcclxuXHRcdG1hdGNoTGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIik7XHJcbmNvbnN0IG1hdGNoTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWF0Y2gtbGlzdFwiKTtcclxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBkaXNwbGF5TWF0Y2hlcyk7XHJcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBkaXNwbGF5TWF0Y2hlcyk7Il0sImZpbGUiOiJtYWluLmpzIn0=
